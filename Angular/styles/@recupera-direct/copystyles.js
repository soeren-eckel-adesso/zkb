const fs = require('fs-extra');
(async function build() {
  await fs.copyFile('./styles/@recupera-direct/import/fonts.scss', './styles/fonts.scss');
  await fs.copyFile('./styles/@recupera-direct/import/variables.scss', './styles/variables.scss');
})();
