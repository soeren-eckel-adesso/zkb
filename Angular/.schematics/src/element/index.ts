import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";
import { normalize, strings } from "@angular-devkit/core";

export function elementApp(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    updateAngularJson(options, tree, context);
    updatePackage(options, tree, context);

    options.path = `apps/element-${options.name}`;
    options.terraformName = options.name.replace("-", "").toLowerCase();

    const templateSource = apply(url("./files"), [
      template({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
        terraformName: options.terraformName,
      }),
      move(normalize(options.path as string)),
    ]);

    return chain([mergeWith(templateSource)]);
  };
}

function updateAngularJson(options: any, tree: Tree, context: SchematicContext) {
  const projectAngular = tree.read("/angular.json");
  const angularConfig = tree.read("/.schematics/src/element/angular.json");

  if (!projectAngular) {
    throw new SchematicsException("Could not find projectAngular configuration");
  }
  if (!angularConfig) {
    throw new SchematicsException("Could not find Angular workspace configuration");
  }

  try {
    const angularJsonFileObject = JSON.parse(projectAngular.toString());
    let angularConfigString = angularConfig.toString();
    const placeholderName = "<%= name %>";
    while (angularConfigString.indexOf(placeholderName) > 0) {
      angularConfigString = angularConfigString.replace("<%= name %>", options.name);
    }
    const newAngularJsonFileObject = JSON.parse(angularConfigString);
    if (angularJsonFileObject && newAngularJsonFileObject) {
      angularJsonFileObject["projects"]["element-" + options.name] = newAngularJsonFileObject;
      tree.overwrite("angular.json", JSON.stringify(angularJsonFileObject, null, 2));
    }
  } catch (e) {
    context.logger.log("error", e);
  }
}

function updatePackage(options: any, tree: Tree, context: SchematicContext) {
  const packageConfig = tree.read("/package.json");

  if (!packageConfig) {
    throw new SchematicsException("Could not find tsConfig configuration");
  }

  try {
    const packageFileObject = JSON.parse(packageConfig.toString());
    if (packageFileObject) {
      packageFileObject["scripts"]["bundlebuild:all-apps"] =
        packageFileObject["scripts"]["bundlebuild:all-apps"] + " && npm run build:element-" + options.name + ":prod";
      packageFileObject["scripts"]["serve:element-" + options.name] = "ng serve element-" + options.name;
      packageFileObject["scripts"]["build:element-" + options.name + ":prod"] =
        "npx ng lint element-" +
        options.name +
        " && ng test element-" +
        options.name +
        " --browsers=ChromeHeadless --source-map=false --watch=false --progress=false --code-coverage && ng build element-" +
        options.name +
        " --prod --output-hashing none && node apps/element-" +
        options.name +
        "/concatenate.js";
      packageFileObject["scripts"]["stats:element-" + options.name + ":prod"] =
        "ng build element-" + options.name + " --stats-json && webpack-bundle-analyzer dist/apps/element-" + options.name + "/stats.json";
      tree.overwrite("package.json", JSON.stringify(packageFileObject, null, 2));
    }
  } catch (e) {
    context.logger.log("error", e);
  }
}
