import { createUseStorageState } from '@pansy/hook-utils';
import { isBrowser } from '@pansy/shared';

/**
 * 将状态存储在 localStorage 中的 Hook
 */
export const useLocalStorageState = createUseStorageState(() => (
  isBrowser ? localStorage : undefined)
);
