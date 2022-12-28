import { useMemo, useRef } from 'react';
import { useUpdate } from '@pansy/use-update';
import { useMemoizedFn } from '@pansy/use-memoized-fn'
import { parse, stringify } from 'query-string';
import * as router from 'react-router';

import type { SetStateAction } from 'react';
import type { ParseOptions, StringifyOptions } from 'query-string';
import type { UrlState, Options, State } from './types';

const baseParseConfig: ParseOptions = {
  parseNumbers: false,
  parseBooleans: false,
};

const baseStringifyConfig: StringifyOptions = {
  skipNull: false,
  skipEmptyString: false,
};

export type { Options };

export const useUrlState = <S extends UrlState = UrlState>(
  initialState?: S | (() => S),
  options?: Options,
) => {
  const { navigateMode = 'push', parseOptions, stringifyOptions } = options || {};

  const mergedParseOptions = { ...baseParseConfig, ...parseOptions };
  const mergedStringifyOptions = { ...baseStringifyConfig, ...stringifyOptions };

  const location = router.useLocation();

  // @ts-ignore v5
  const history = router.useHistory?.();
  // @ts-ignore v6
  const navigate = router.useNavigate?.();

  const update = useUpdate();

  const initialStateRef = useRef(
    typeof initialState === 'function' ? (initialState as () => S)() : initialState || {},
  );

  const queryFromUrl = useMemo(() => {
    return parse(location.search, mergedParseOptions);
  }, [location.search]);

  const targetQuery: State<S> = useMemo(
    () => ({
      ...initialStateRef.current,
      ...queryFromUrl,
    }),
    [queryFromUrl],
  );

  const setState = (s: SetStateAction<State<S>>) => {
    const newQuery = typeof s === 'function' ? s(targetQuery) : s;

    update();

    if (history) {
      history[navigateMode]({
        hash: location.hash,
        search: stringify({ ...queryFromUrl, ...newQuery }, mergedStringifyOptions) || '?',
      });
    }

    if (navigate) {
      navigate(
        {
          hash: location.hash,
          search: stringify({ ...queryFromUrl, ...newQuery }, mergedStringifyOptions) || '?',
        },
        {
          replace: navigateMode === 'replace',
        },
      );
    }
  }

  return [targetQuery, useMemoizedFn(setState)] as const;
}
