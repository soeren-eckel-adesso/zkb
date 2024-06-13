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

export function createLib(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    updateAngularJson(options, tree, context);
    updateTsConfig(options, tree, context);

    options.path = `libs/@${options.customer}/repositories/${options.name}`;

    const templateSource = apply(url("./files"), [
      template({
        classify: strings.classify,
        dasherize: strings.dasherize,
        customer: options.customer,
        name: options.name,
      }),
      move(normalize(options.path as string)),
    ]);

    return chain([mergeWith(templateSource)]);
  };
}

function updateAngularJson(options: any, tree: Tree, context: SchematicContext) {
  const projectAngular = tree.read("/angular.json");
  const angularConfig = tree.read("/.schematics/src/repository/angular.json");

  if (!projectAngular) {
    throw new SchematicsException("Could not find projectAngular configuration");
  }
  if (!angularConfig) {
    throw new SchematicsException("Could not find Angular workspace configuration");
  }

  try {
    const angularJsonFileObject = JSON.parse(projectAngular.toString());
    let angularConfigString = angularConfig.toString();
    const placeholderCustomer = "<%= customer %>";
    while (angularConfigString.indexOf(placeholderCustomer) > 0) {
      angularConfigString = angularConfigString.replace("<%= customer %>", options.customer);
    }
    const placeholderName = "<%= name %>";
    while (angularConfigString.indexOf(placeholderName) > 0) {
      angularConfigString = angularConfigString.replace("<%= name %>", options.name);
    }

    const newAngularJsonFileObject = JSON.parse(angularConfigString);
    if (angularJsonFileObject && newAngularJsonFileObject) {
      angularJsonFileObject["projects"]["@" + options.customer + "/repository-" + options.name] = newAngularJsonFileObject;

      //Sort
      angularJsonFileObject["projects"] = sortList(angularJsonFileObject["projects"]);

      tree.overwrite("angular.json", JSON.stringify(angularJsonFileObject, null, 2));
    }
  } catch (e) {
    context.logger.log("error", e);
  }
}

function updateTsConfig(options: any, tree: Tree, context: SchematicContext) {
  const tsConfig = tree.read("/tsconfig.base.json");

  if (!tsConfig) {
    throw new SchematicsException("Could not find tsConfig configuration");
  }
  try {
    const angularJsonFileObject = JSON.parse(tsConfig.toString());
    if (angularJsonFileObject) {
      angularJsonFileObject["compilerOptions"]["paths"]["@" + options.customer + "/repository-" + options.name] = [
        "libs/@" + options.customer + "/repositories/" + options.name + "/src/public-api",
      ];

      //Sort
      angularJsonFileObject["compilerOptions"]["paths"] = sortList(angularJsonFileObject["compilerOptions"]["paths"]);

      tree.overwrite("tsconfig.base.json", JSON.stringify(angularJsonFileObject, null, 2));
    }
  } catch (e) {
    context.logger.log("error", e);
  }
}

function sortList(list: any): any {
  let keys = Object.keys(list);
  keys.sort();
  let sortedPath: any = {};
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    sortedPath[k] = list[k];
  }
  return sortedPath;
}
