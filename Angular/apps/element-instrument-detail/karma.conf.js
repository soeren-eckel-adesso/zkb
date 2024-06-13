// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { getCommonConfig } = require('../../karma.conf.shared');

module.exports = function (config) {
  const coveragePath = require('path').join(__dirname, '../../coverage/web-adesso-demo');

  const shared = getCommonConfig(config, coveragePath, '/apps/web-adesso-demo');

  config.set({
    ...shared
  });
};
