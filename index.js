const { useEffect, useRef } = require('react');

module.exports.useAsyncEffect = (effect, destroy, inputs) => {
  const hasDestroy = typeof destroy === 'function';
  const mounted = useRef(true);

  useEffect(() => {
    let result;
    effect(() => mounted.current).then((value) => result = value);

    return () => {
      mounted.current = false;
      if (hasDestroy) {
        destroy(result);
      }
    };
  }, hasDestroy ? inputs : destroy);
};
