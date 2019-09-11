import { useAsyncEffect } from 'use-async-effect';

// $ExpectError
useAsyncEffect();

// $ExpectType void
useAsyncEffect((isMounted) => {});

// $ExpectType void
useAsyncEffect(async () => {});

// $ExpectType void
useAsyncEffect(async () => {}, []);

// $ExpectError
useAsyncEffect(async () => {}, [], () => {});

// $ExpectType void
useAsyncEffect(async () => {}, () => {}, []);
