const fs = require("fs-extra");
(async function build() {
  await fs.copyFile("./styles/@adesso-demo/import/fonts.scss", "./styles/fonts.scss");
  await fs.copyFile("./styles/@adesso-demo/import/variables.scss", "./styles/variables.scss");
})();
