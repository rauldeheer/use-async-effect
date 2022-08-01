// TypeScript Version: 3.0
export function useAsyncEffect(
  effect: (isMounted: () => boolean) => unknown | Promise<unknown>,
  inputs?: any[]
): void;

export function useAsyncEffect<V>(
  effect: (isMounted: () => boolean) => V | Promise<V>,
  destroy?: (result?: V) => void,
  inputs?: any[]
): void;

export default useAsyncEffect;
