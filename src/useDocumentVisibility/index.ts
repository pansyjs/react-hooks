import { useState } from 'react';
import { useEventListener } from '../useEventListener';
import { isBrowser } from '../utils/isBrowser';

type VisibilityState = 'hidden' | 'visible' | 'prerender' | undefined;

const getVisibility = () => {
  if (!isBrowser) return 'visible';

  return document.visibilityState;
};

/**
 * 监听页面是否可见
 * @returns
 */
 export function useDocumentVisibility(): VisibilityState {
  const [documentVisibility, setDocumentVisibility] = useState(() => getVisibility());

  useEventListener(
    'visibilitychange',
    () => {
      setDocumentVisibility(getVisibility());
    },
    {
      target: () => document,
    },
  );

  return documentVisibility;
}
