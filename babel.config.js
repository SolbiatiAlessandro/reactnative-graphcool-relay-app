module.exports = function(api) {
  api.cache(true);
  console.log("calling babel.config.info")
  return {
	plugins: ['relay'],
    presets: ['babel-preset-expo']
  };
};
