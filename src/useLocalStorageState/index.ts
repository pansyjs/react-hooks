import { createUseStorageState } from '../utils/createUseStorageState';
import { isBrowser } from '../utils/isBrowser';

/**
 * 将状态存储在 localStorage 中的 Hook
 */
export const useLocalStorageState = createUseStorageState(() => (
  isBrowser ? localStorage : undefined)
);
