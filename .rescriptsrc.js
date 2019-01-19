function deepLog(obj) {
  const util = require('util');
  console.log(util.inspect(obj, false, 10, true));
}

function findOneOf(config) {
  return config.module.rules.find(x => x.oneOf).oneOf;
}

function findBabelRule(config) {
  const oneOf = findOneOf(config);
  return oneOf.find(x => x.loader.indexOf('babel-loader') > -1);
}

function addBabelPluginModuleResolve(config) {
  const babelRule = findBabelRule(config);
  const plugins = babelRule.options.plugins;
  const tsopts = require('./paths.json').compilerOptions;
  const opts = {root: tsopts.baseUrl, alias: {}};
  Object.entries(tsopts.paths).forEach(([k, v]) => {
    opts.alias[k.replace('/*', '')] = v[0].replace('/*', '');
  });
  plugins.unshift([require.resolve('babel-plugin-module-resolver'), opts]);
  console.log('*** Using aliasing / path mapping:');
  console.log('*** from paths.json (tsconfig):');
  deepLog(tsopts);
  console.log('*** translated into module-resolver format:');
  deepLog(opts);
}

module.exports = [
  // [
  //   'use-babel-config', '.babelrc.js'
  // ],

  ['use-eslint-config', '.eslintrc.js'],

  // make eslint webpack rule work with ts and use eslintignore
  w => {
    const rule = w.module.rules[1];
    const options = rule.use[0].options;
    if (!options.eslintPath) throw new Error('eslint rescripts error. check .rescriptsrc.js');
    rule.test = /\.(js|mjs|jsx|ts|tsx)$/;
    options.ignore = true;

    addBabelPluginModuleResolve(w);

    // oneOf.splice(oneOf.length - 1, 0, {
    //   test: /\.(graphql|gql)$/,
    //   exclude: /node_modules/,
    //   loader: 'graphql-tag/loader',
    // });

    // console.log(require('util').inspect(oneOf));
    // process.exit();

    return w;
  },
];
