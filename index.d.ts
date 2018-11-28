declare module 'use-async-effect' {
  export function useAsyncEffect<V>(effect: () => Promise<V>, destroy?: (result?: V) => void, inputs?: any[]): void;
}
