'use strict';

var React = require('react');

function useAsyncEffect(effect, destroy, inputs) {
  var hasDestroy = typeof destroy === 'function';

  React.useEffect(function () {
    var result;
    var mounted = true;
    var maybePromise = effect(function () {
      return mounted;
    });

    Promise.resolve(maybePromise).then(function (value) {
      result = value;
    });

    return function () {
      mounted = false;

      if (hasDestroy) {
        destroy(result);
      }
    };
  }, hasDestroy ? inputs : destroy);
}

module.exports = useAsyncEffect;
module.exports.useAsyncEffect = useAsyncEffect;
