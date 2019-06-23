[![npm version](https://badge.fury.io/js/use-async-effect.svg)](https://www.npmjs.com/package/use-async-effect)

# use-async-effect
:running: Asynchronous side effects, without the nonsense

## Installation

```
npm install use-async-effect
```
or
```
yarn add use-async-effect
```

This package includes TypeScript and Flow types.

## Examples

Basic mount/unmount
```javascript
useAsyncEffect(async () => console.log('mount'), () => console.log('unmount'), []);
```

Omitting destroy
```javascript
useAsyncEffect(async () => console.log('mount'), []);
```

Handle effect result in destroy
```javascript
useAsyncEffect(() => fetch('url'), (result) => console.log(result));
```
