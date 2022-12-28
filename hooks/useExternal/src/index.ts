import { useEffect, useRef, useState } from 'react';
import { loadScript, loadCss, } from './utils';

import type { Options, Status, } from './types';

// {[path]: count}
// remove external when no used
const EXTERNAL_USED_COUNT: Record<string, number> = {};

export const useExternal = (path?: string, options?: Options) => {
  const [status, setStatus] = useState<Status>(path ? 'loading' : 'unset');

  const ref = useRef<Element>();

  useEffect(
    () => {
      if (!path) {
        setStatus('unset');
        return;
      }
      const pathname = path.replace(/[|#].*$/, '');

      if (options?.type === 'css' || (!options?.type && /(^css!|\.css$)/.test(pathname))) {
        const result = loadCss(path, options?.css);
        ref.current = result.ref;
        setStatus(result.status);
      } else if (options?.type === 'js' || (!options?.type && /(^js!|\.js$)/.test(pathname))) {
        const result = loadScript(path, options?.js);
        ref.current = result.ref;
        setStatus(result.status);
      } else {
        // do nothing
        console.error(
          "Cannot infer the type of external resource, and please provide a type ('js' | 'css'). "
        );
      }

      if (!ref.current) {
        return;
      }

      if (EXTERNAL_USED_COUNT[path] === undefined) {
        EXTERNAL_USED_COUNT[path] = 1;
      } else {
        EXTERNAL_USED_COUNT[path] += 1;
      }

      const handler = (event: Event) => {
        const targetStatus = event.type === 'load' ? 'ready' : 'error';
        ref.current?.setAttribute('data-status', targetStatus);
        setStatus(targetStatus);
      };

      ref.current.addEventListener('load', handler);
      ref.current.addEventListener('error', handler);

      return () => {
        ref.current?.removeEventListener('load', handler);
        ref.current?.removeEventListener('error', handler);

        EXTERNAL_USED_COUNT[path] -= 1;

        if (EXTERNAL_USED_COUNT[path] === 0) {
          ref.current?.remove();
        }

        ref.current = undefined;
      };
    },
    [path]
  );

  return status;
}

export type { Options }
