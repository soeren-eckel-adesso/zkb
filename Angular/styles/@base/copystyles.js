const fs = require('fs-extra');
(async function build() {
  await fs.copyFile('./styles/@adesso/import/fonts.scss', './styles/fonts.scss');
  await fs.copyFile('./styles/@adesso/import/variables.scss', './styles/variables.scss');
})();
