declare module 'use-async-effect' {
  import { InputIdentityList } from 'react';

  export function useAsyncEffect(effect: () => void, destroy?: () => void, input?: InputIdentityList);
}
