const { useEffect, useRef } = require('react');

const useAsyncEffect = (effect, destroy, inputs) => {
  const hasDestroy = typeof destroy === 'function';

  useEffect(
    () => {
      let result;
      let mounted = true;

      const maybePromise = effect(() => mounted);

      Promise.resolve(maybePromise).then(value => {
        result = value;
      });

      return () => {
        mounted = false;

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
