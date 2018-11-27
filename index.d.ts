declare module 'use-async-effect' {
  import { InputIdentityList } from 'react';

  export function useAsyncEffect(effect: () => Promise<void>, destroy?: () => void, inputs?: InputIdentityList);
}
