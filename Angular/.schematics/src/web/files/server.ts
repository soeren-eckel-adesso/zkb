import "zone.js/dist/zone-node";

import { join } from "path";
import { existsSync } from "fs";
import { ngExpressEngine } from "@nguniversal/express-engine";
import express from "express";
import cors from "cors";
import compression from "compression";

import { APP_BASE_HREF } from "@angular/common";
import { enableProdMode } from "@angular/core";
import bodyParser from "body-parser";
import { AppServerModule } from "./src/main.server";
import { environment } from "./src/environments/environment";

// faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// (global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// the Express app is exported so that it can be used by serverless Functions.
export function buildApp() {
  const server = express();

  const path = process.cwd();
  const distFolder = environment.production ? path : join(path, "dist/apps/web-<%= name %>");

  const indexHtml = existsSync(join(distFolder, "index.original.html")) ? "index.original.html" : "index";

  server.use(compression());
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    "html",
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set("view engine", "html");
  server.set("views", distFolder);

  // example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // serve static files from /browser
  server.get(
    "*.*",
    express.static(distFolder, {
      maxAge: 1,
    })
  );

  // all regular routes use the Universal engine
  server.get("*", (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

export const app = buildApp();

function run() {
  const port = environment.production ? 8080 : process.env.PORT || environment.port;

  // start up the Node server
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// the below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || "";
if (moduleFilename === __filename || moduleFilename.includes("iisnode")) {
  run();
}

export * from "./src/main.server";
