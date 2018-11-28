const { useEffect } = require('react');

module.exports.useAsyncEffect = (effect, destroy, inputs) => {
  useEffect(() => {
    let result;
    effect().then((value) => result = value);

    return () => destroy(result);
  }, inputs);
};
