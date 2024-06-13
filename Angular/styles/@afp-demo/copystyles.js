const fs = require("fs-extra");
(async function build() {
  await fs.copyFile("./styles/@afp-demo/import/fonts.scss", "./styles/fonts.scss");
  await fs.copyFile("./styles/@afp-demo/import/variables.scss", "./styles/variables.scss");
})();
