module.exports = function(api) {
  api.cache(true);
  console.log("calling babel.config.info")
  return {
    presets: ['babel-preset-expo']
  };
};
