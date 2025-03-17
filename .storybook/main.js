/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // 既存のPostCSS設定を尊重
    config.module.rules.forEach((rule) => {
      if (rule && rule.test && rule.test.toString().includes("css")) {
        rule.use = rule.use.map((useLoader) => {
          if (
            typeof useLoader === "object" &&
            useLoader.loader &&
            useLoader.loader.includes("postcss-loader")
          ) {
            const postcssOptions = useLoader.options.postcssOptions || {};
            postcssOptions.config = false;
            postcssOptions.plugins = [
              require("@tailwindcss/postcss"),
              require("autoprefixer"),
            ];
            useLoader.options.postcssOptions = postcssOptions;
          }
          return useLoader;
        });
      }
    });

    return config;
  },
};
module.exports = config;
