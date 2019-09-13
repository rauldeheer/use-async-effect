const { useEffect, useRef } = require('react');

const useAsyncEffect = (effect, destroy, inputs) => {
  const hasDestroy = typeof destroy === 'function';
  const mounted = useRef();

  useEffect(
    () => {
      mounted.current = true;

      let result;
      const maybePromise = effect(() => mounted.current);

      Promise.resolve(maybePromise).then(value => {
        result = value;
      });

      return () => {
        mounted.current = false;

        if (hasDestroy) {
          destroy(result);
        }
      };
    },
    hasDestroy ? inputs : destroy
  );
};

module.exports = useAsyncEffect;
module.exports.useAsyncEffect = useAsyncEffect;
