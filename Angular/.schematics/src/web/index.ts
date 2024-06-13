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

export function webApp(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    updateAngularJson(options, tree, context);
    updatePackage(options, tree, context);
    sortPackage(tree, context);

    // Project
    options.path = `apps/web-${options.name}`;
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
      angularJsonFileObject["projects"]["web-<%= name %>"] = newAngularJsonFileObject;
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
      packageFileObject["scripts"]["docker:web-<%= name %>:build"] = "cd .. && docker-compose build web-<%= name %>";
      packageFileObject["scripts"]["docker:web-<%= name %>:up"] = "cd .. && docker-compose up web-<%= name %>";
      packageFileObject["scripts"]["docker:web-<%= name %>:build:up"] = "cd .. && docker-compose up --build web-<%= name %>";
      packageFileObject["scripts"]["serve:web-<%= name %>:docker-ssr"] = "npm run use-<%= name %>-styles && node dist/apps/web-<%= name %>/server/main.js";
      */
      packageFileObject["scripts"]["serve:web-<%= name %>:ssr"] =
        "npm run use-<%= name %>-styles && ng run web-<%= name %>:serve-ssr --configuration=dev";
      packageFileObject["scripts"]["serve:web-<%= name %>:client"] =
        "npm run use-<%= name %>-styles && ng run web-<%= name %>:serve --configuration=dev";
      packageFileObject["scripts"]["build:web-<%= name %>:prod"] =
        "npm run use-<%= name %>-styles && ng build web-<%= name %> --prod && ng run web-<%= name %>:server:production";
      packageFileObject["scripts"]["deploy:web-<%= name %>:azure"] =
        "npm run build:web-<%= name %>:prod && cd ../Deployment/terraform/angular-web && terraform init && terraform workspace select <%= terraformName %> && terraform plan -var=terraform_name=<%= terraformName %> -var=dist_folder=web-<%= name %> -var=with_ssr=0 && terraform apply -auto-approve -var=terraform_name=<%= terraformName %> -var=dist_folder=web-<%= name %> -var=with_ssr=0";
      packageFileObject["scripts"]["deploy:web-<%= name %>:azure:destroy"] =
        "cd ../Deployment/terraform/angular-web && terraform init && terraform workspace select <%= terraformName %> && terraform destroy -auto-approve -var=terraform_name=<%= terraformName %> -var=dist_folder=web-<%= name %>";
      packageFileObject["scripts"]["deploy:web-<%= name %>:azure:add-workspace"] =
        "cd ../Deployment/terraform/angular-web && terraform workspace new <%= terraformName %>";
      packageFileObject["scripts"]["stats:web-<%= name %>:prod"] =
        "npm run build:web-<%= name %>:prod && ng build --stats-json && webpack-bundle-analyzer dist/apps/web-<%= name %>/stats.json";
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
