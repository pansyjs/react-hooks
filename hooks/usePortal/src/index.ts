import { useState, useEffect, useCallback } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';

import type { ReactPortal, ReactNode } from 'react';

export interface Portal {
  render: (props: { children: ReactNode }) => ReactPortal | null;
  remove: (elm?: HTMLElement) => void;
}

export const usePortal = () => {
  const [container] = useState<HTMLDivElement>(() => {
    return document.createElement('div');
  });

  const [portal, setPortal] = useState<Portal>({
    render: () => null,
    remove: () => null,
  });

  const ReactCreatePortal = useCallback<(elmm: HTMLDivElement) => Portal>((elmm) => {
    const Portal: Portal['render'] = ({ children }) => {
      if (!children) return null;
      return createPortal(children, elmm);
    };
    const remove: Portal['remove'] = (elm) => {
      elm && unmountComponentAtNode(elm);
    };
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (container) portal.remove();
    const newPortal = ReactCreatePortal(container);
    setPortal(newPortal);
    return () => {
      newPortal.remove(container);
    };
  }, [container]);

  return { Portal: portal.render, container };
}
