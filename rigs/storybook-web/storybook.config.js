process.env.DISABLE_ESLINT_PLUGIN = true;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = dirname => ({
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    'storybook-addon-turbo-build',
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: false,
        swcLoaderOptions: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: false,
              dynamicImport: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      },
    },
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: false,
      },
    },
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*/*.stories.tsx'],
  webpackFinal: async config => {
    const tsConfig = path.resolve(dirname, '../tsconfig.json');
    console.log('tsconfig', tsConfig);

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: tsConfig,
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
});
