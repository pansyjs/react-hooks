import { canUseDom } from '@pansy/hook-utils';

export function isOnline(): boolean {
  if (canUseDom() && typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }
  return true;
}
