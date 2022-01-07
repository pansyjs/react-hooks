import { createUseStorageState, isBrowser } from '@pansy/hook-utils';

/**
 * 将状态存储在 localStorage 中的 Hook
 */
export const useLocalStorageState = createUseStorageState(() => (
  isBrowser ? localStorage : undefined)
);
