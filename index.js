import { useEffect } from 'react';

module.exports.useAsyncEffect = (effect, destroy, inputs) => {
  useEffect(() => {
    effect();

    return destroy;
  }, inputs);
};
