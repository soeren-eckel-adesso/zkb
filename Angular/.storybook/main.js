module.exports = {
  stories: ["../libs/**/*.stories.ts", "../apps/**/*.stories.ts"],
  addons: ["@storybook/addon-viewport", "@storybook/addon-backgrounds", "@storybook/addon-docs", "@storybook/addon-knobs"],
  framework: "@storybook/angular",
  core: {
    builder: "webpack5",
  },
};
