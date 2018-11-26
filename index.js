const { useEffect } = require('react');

module.exports.useAsyncEffect = (effect, destroy, inputs) => {
  useEffect(() => {
    effect();

    return destroy;
  }, inputs);
};
