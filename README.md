![Logo](https://raw.githubusercontent.com/rauldeheer/use-async-effect/master/logo.svg?sanitize=true)
[![npm version](https://badge.fury.io/js/use-async-effect.svg)](https://www.npmjs.com/package/use-async-effect)
[![license](https://badgen.net/npm/license/use-async-effect)](./LICENSE)

---

:running: Asynchronous side effects, without the nonsense.

```javascript
useAsyncEffect(async () => {
  await doSomethingAsync();
});
```

## Installation

```
npm install use-async-effect
```
or
```
yarn add use-async-effect
```

This package ships with TypeScript and Flow types.

## API

The API is the same as React's `useEffect()`, except for some notable differences:

- The destroy function is passed as an optional second argument:

```javascript
useAsyncEffect(callback, dependencies?);
useAsyncEffect(callback, onDestroy, dependencies?);
```

- The async callback will receive a single function to check whether the callback is still active:

```javascript
useAsyncEffect(async isActive => {
  const data1 = await fn1();
  if (!isActive()) return;

  const data2 = await fn2();
  if (!isActive()) return;

  doSomething(data1, data2);
});
```

> Active means that it's running in the current component. It can become inactive if the component is unmounted, or if the component is re-rendered and the callback is dropped and a new one is called.

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

Making sure it's still active before updating component state
```javascript
useAsyncEffect(async isActive => {
  const data = await fetch(`/users/${id}`).then(res => res.json());
  if (!isActive()) return;
  setUser(data);
}, [id]);
```
