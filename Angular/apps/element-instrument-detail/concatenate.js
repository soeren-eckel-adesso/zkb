const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const fileses2017 = [
    './dist/apps/element-instrument-detail/runtime-es2017.js',
    './dist/apps/element-instrument-detail/polyfills-es2017.js',
    './dist/apps/element-instrument-detail/main-es2017.js',
  ];
  await concat(fileses2017, 'dist/apps/element-instrument-detail/element-instrument-detail-es2017.js');
  await fs.remove('./dist/apps/element-instrument-detail/runtime-es2017.js');
  await fs.remove('./dist/apps/element-instrument-detail/polyfills-es2017.js');
  await fs.remove('./dist/apps/element-instrument-detail/main-es2017.js');
  await fs.copyFile('./dist/apps/element-instrument-detail/element-instrument-detail-es2017.js', '../AdessoExchangeEpi/AdessoExchangeEpi/Static/elements/element-instrument-detail-es2017.js');

  const filesEs5 = [
    './dist/apps/element-instrument-detail/runtime-es5.js',
    './dist/apps/element-instrument-detail/polyfills-es5.js',
    './dist/apps/element-instrument-detail/main-es5.js',
  ];
  await concat(filesEs5, 'dist/apps/element-instrument-detail/element-instrument-detail-es5.js');
  await fs.remove('./dist/apps/element-instrument-detail/runtime-es5.js');
  await fs.remove('./dist/apps/element-instrument-detail/polyfills-es5.js');
  await fs.remove('./dist/apps/element-instrument-detail/main-es5.js');
  await fs.copyFile('./dist/apps/element-instrument-detail/element-instrument-detail-es5.js', '../AdessoExchangeEpi/AdessoExchangeEpi/Static/elements/element-instrument-detail-es5.js');

  await fs.copyFile('./apps/element-instrument-detail/dist-index.html', './dist/apps/element-instrument-detail/index.html');
})();
