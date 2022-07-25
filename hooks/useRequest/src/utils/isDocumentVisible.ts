import { canUseDom } from '@pansy/hook-utils';

export function isDocumentVisible(): boolean {
  if (canUseDom()) {
    return document.visibilityState !== 'hidden';
  }
  return true;
}
