const CracoAlias = require('craco-alias');

module.exports = {
  babel: {
    plugins: [
      'babel-plugin-macros',
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
