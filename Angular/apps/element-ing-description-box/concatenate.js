const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const fileses2017 = [
    './dist/apps/element-ing-description-box/runtime-es2017.js',
    './dist/apps/element-ing-description-box/polyfills-es2017.js',
    './dist/apps/element-ing-description-box/main-es2017.js',
  ];
  await concat(fileses2017, 'dist/apps/element-ing-description-box/element-ing-description-box-es2017.js');
  await fs.remove('./dist/apps/element-ing-description-box/runtime-es2017.js');
  await fs.remove('./dist/apps/element-ing-description-box/polyfills-es2017.js');
  await fs.remove('./dist/apps/element-ing-description-box/main-es2017.js');

  const filesEs5 = [
    './dist/apps/element-ing-description-box/runtime-es5.js',
    './dist/apps/element-ing-description-box/polyfills-es5.js',
    './dist/apps/element-ing-description-box/main-es5.js',
  ];
  await concat(filesEs5, 'dist/apps/element-ing-description-box/element-ing-description-box-es5.js');
  await fs.remove('./dist/apps/element-ing-description-box/runtime-es5.js');
  await fs.remove('./dist/apps/element-ing-description-box/polyfills-es5.js');
  await fs.remove('./dist/apps/element-ing-description-box/main-es5.js');

  await fs.copyFile('./apps/element-ing-description-box/dist-index.html', './dist/apps/element-ing-description-box/index.html');
})();
