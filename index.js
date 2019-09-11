
const { useEffect, useRef } = require("react");

const useAsyncEffect = (effect, destroy, inputs) => {
  const hasDestroy = typeof destroy === "function";
  const mounted = useRef(true);

  useEffect(
    () => {
      let result;
      const maybePromise = effect(() => mounted.current);

      Promise.resolve(maybePromise).then(value => {
        result = value;
      });

      if (hasDestroy) return () => destroy(result);
    },
    hasDestroy ? inputs : destroy
  );

  // This will only happen when the component is unmounted,
  // not when the dependencies change
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
};

module.exports = useAsyncEffect;
module.exports.useAsyncEffect = useAsyncEffect;
