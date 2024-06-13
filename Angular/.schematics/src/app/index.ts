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

export function app(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    updateAngularJson(options, tree, context);
    updatePackage(options, tree, context);
    sortPackage(tree, context);

    // Project
    options.path = `apps/app-${options.name}`;
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

    const styleSource = apply(url("./styles"), [
      template({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
        terraformName: options.terraformName,
      }),
      move(normalize(`styles/@${options.name}`)),
    ]);

    return chain([mergeWith(templateSource), mergeWith(styleSource)]);
  };
}

function updateAngularJson(options: any, tree: Tree, context: SchematicContext) {
  const projectAngular = tree.read("/angular.json");
  const angularConfig = tree.read("/.schematics/src/web/angular.json");

  if (!projectAngular) {
    throw new SchematicsException("Could not find projectAngular configuration");
  }
  if (!angularConfig) {
    throw new SchematicsException("Could not find Angular workspace configuration");
  }

  try {
    const angularJsonFileObject = JSON.parse(projectAngular.toString());
    let angularConfigString = angularConfig.toString();
    const newAngularJsonFileObject = JSON.parse(angularConfigString);
    if (angularJsonFileObject && newAngularJsonFileObject) {
      angularJsonFileObject["projects"]["app-<%= name %>"] = newAngularJsonFileObject;
      tree.overwrite("angular.json", replaceConfigPlaceholder(JSON.stringify(angularJsonFileObject, null, 2), options));
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
      /*
      packageFileObject["scripts"]["docker:app-<%= name %>:build"] = "cd .. && docker-compose build app-<%= name %>";
      packageFileObject["scripts"]["docker:app-<%= name %>:up"] = "cd .. && docker-compose up app-<%= name %>";
      packageFileObject["scripts"]["docker:app-<%= name %>:build:up"] = "cd .. && docker-compose up --build app-<%= name %>";
      packageFileObject["scripts"]["serve:app-<%= name %>:docker-ssr"] = "npm run use-<%= name %>-styles && node dist/apps/app-<%= name %>/server/main.js";
      */
      packageFileObject["scripts"]["serve:app-<%= name %>:client"] =
        "npm run build:app-<%= name %:prod && cd ../Cordova && npm run emulate";
      packageFileObject["scripts"]["build:app-<%= name %>:prod"] =
        "npm run use-<%= name %>-styles && ng build app-<%= name %> --configuration=production --base-href .";
      packageFileObject["scripts"]["deploy:app-<%= name %>:azure"] =
        "npm run build:app-<%= name %>:prod && cd ../Deployment/terraform/angular-web && terraform init && terraform workspace select <%= terraformName %> && terraform plan -var=terraform_name=<%= terraformName %> -var=dist_folder=app-<%= name %> -var=with_ssr=0 && terraform apply -auto-approve -var=terraform_name=<%= terraformName %> -var=dist_folder=app-<%= name %> -var=with_ssr=0";
      packageFileObject["scripts"]["deploy:app-<%= name %>:azure:destroy"] =
        "cd ../Deployment/terraform/angular-web && terraform init && terraform workspace select <%= terraformName %> && terraform destroy -auto-approve -var=terraform_name=<%= terraformName %> -var=dist_folder=app-<%= name %>";
      packageFileObject["scripts"]["deploy:app-<%= name %>:azure:add-workspace"] =
        "cd ../Deployment/terraform/angular-web && terraform workspace new <%= terraformName %>";
      packageFileObject["scripts"]["stats:app-<%= name %>:prod"] =
        "npm run build:app-<%= name %>:prod && ng build --stats-json && webpack-bundle-analyzer dist/apps/app-<%= name %>/stats.json";
      packageFileObject["scripts"]["use-<%= name %>-styles"] = "node styles/@<%= name %>/copystyles.js";

      tree.overwrite("package.json", replaceConfigPlaceholder(JSON.stringify(packageFileObject, null, 2), options));
    }

    /*
    //Sort
    const packageFileSortObject = JSON.parse(packageConfig.toString());
    if (packageFileSortObject) {
      packageFileSortObject["scripts"] = sortList(packageFileSortObject["scripts"]);
      tree.overwrite("package.json", JSON.stringify(packageFileSortObject, null, 2));
    }
     */
  } catch (e) {
    context.logger.log("error", e);
  }
}

function sortPackage(tree: Tree, context: SchematicContext) {
  const packageConfig = tree.read("/package.json");

  if (!packageConfig) {
    throw new SchematicsException("Could not find tsConfig configuration");
  }

  try {
    //Sort
    const packageFileSortObject = JSON.parse(packageConfig.toString());
    if (packageFileSortObject) {
      packageFileSortObject["scripts"] = sortList(packageFileSortObject["scripts"]);
      tree.overwrite("package.json", JSON.stringify(packageFileSortObject, null, 2));
    }
  } catch (e) {
    context.logger.log("error", e);
  }
}

function replaceConfigPlaceholder(config: string, options: any): string {
  while (config.indexOf("<%= name %>") > 0) {
    config = config.replace("<%= name %>", options.name);
  }
  return config;
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
