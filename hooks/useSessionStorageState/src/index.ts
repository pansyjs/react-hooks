import { isBrowser, createUseStorageState } from '@pansy/hook-utils';

/**
 * 将状态存储在 sessionStorage 中的 Hook
 */
export const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? sessionStorage : undefined,
);
