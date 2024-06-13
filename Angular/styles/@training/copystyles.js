const fs = require("fs-extra");
(async function build() {
  await fs.copyFile("./styles/@training/import/fonts.scss", "./styles/fonts.scss");
  await fs.copyFile("./styles/@training/import/variables.scss", "./styles/variables.scss");
})();
