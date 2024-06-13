const fs = require('fs-extra');
(async function build() {
  await fs.copyFile('./styles/@volksbank/import/fonts.scss', './styles/fonts.scss');
  await fs.copyFile('./styles/@volksbank/import/variables.scss', './styles/variables.scss');
})();
