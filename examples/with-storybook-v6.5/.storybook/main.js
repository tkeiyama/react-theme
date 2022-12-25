/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    {
      name: "storybook-addon-turbo-build",
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
    },
  },
  features: {
    storyStoreV7: true,
  },
};
