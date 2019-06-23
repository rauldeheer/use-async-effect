const { useEffect } = require('react');

module.exports.useAsyncEffect = (effect, destroy, inputs) => {
  const hasDestroy = typeof destroy === 'function';

  useEffect(() => {
    let result;
    effect().then((value) => result = value);

    if (hasDestroy) {
      return () => destroy(result);
    }
  }, hasDestroy ? inputs : destroy);
};
