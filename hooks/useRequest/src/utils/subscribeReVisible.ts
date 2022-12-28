import { isBrowser } from '@pansy/shared';

import { isDocumentVisible, } from './isDocumentVisible';

type Listener = () => void;

const listeners: Listener[] = [];

export function subscribeReVisible(listener: Listener) {
  listeners.push(listener);

  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

if (isBrowser) {
  const revalidate = () => {
    if (!isDocumentVisible()) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', revalidate, false);
}
