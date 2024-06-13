const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const fileses2017 = [
    "./dist/apps/element-ing-instrument-search/runtime-es2017.js",
    "./dist/apps/element-ing-instrument-search/polyfills-es2017.js",
    "./dist/apps/element-ing-instrument-search/main-es2017.js",
  ];
  await concat(fileses2017, "dist/apps/element-ing-instrument-search/element-ing-instrument-search-es2017.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/runtime-es2017.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/polyfills-es2017.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/main-es2017.js");

  const filesEs5 = [
    "./dist/apps/element-ing-instrument-search/runtime-es5.js",
    "./dist/apps/element-ing-instrument-search/polyfills-es5.js",
    "./dist/apps/element-ing-instrument-search/main-es5.js",
  ];
  await concat(filesEs5, "dist/apps/element-ing-instrument-search/element-ing-instrument-search-es5.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/runtime-es5.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/polyfills-es5.js");
  await fs.remove("./dist/apps/element-ing-instrument-search/main-es5.js");

  await fs.copyFile("./apps/element-ing-instrument-search/dist-index.html", "./dist/apps/element-ing-instrument-search/index.html");
})();
