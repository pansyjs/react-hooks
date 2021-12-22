import { createUseStorageState } from '../utils/createUseStorageState';
import { isBrowser } from '../utils/isBrowser';

/**
 * 将状态存储在 sessionStorage 中的 Hook
 */
export const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? sessionStorage : undefined,
);
