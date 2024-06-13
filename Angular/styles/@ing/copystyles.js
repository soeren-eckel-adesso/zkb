const fs = require('fs-extra');
(async function build() {
  await fs.copyFile('./styles/@ing/import/fonts.scss', './styles/fonts.scss');
  await fs.copyFile('./styles/@ing/import/variables.scss', './styles/variables.scss');
})();
