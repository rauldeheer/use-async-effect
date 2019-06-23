// TypeScript Version: 3.0
export function useAsyncEffect(effect: () => Promise<unknown>, inputs?: any[]): void;

export function useAsyncEffect<V>(effect: () => Promise<V>, destroy?: (result?: V) => void, inputs?: any[]): void;
