import { useAutoRunPlugin } from './plugins/useAutoRunPlugin';
import { useDebouncePlugin } from './plugins/useDebouncePlugin';
import { usePollingPlugin } from './plugins/usePollingPlugin';
import { useLoadingDelayPlugin } from './plugins/useLoadingDelayPlugin';
import { useCachePlugin } from './plugins/useCachePlugin';
import { useRefreshOnWindowFocusPlugin } from './plugins/useRefreshOnWindowFocusPlugin';
import { useRetryPlugin } from './plugins/useRetryPlugin';
import { useThrottlePlugin } from './plugins/useThrottlePlugin';

import { useRequestImplement } from './useRequestImplement';

import type { Options, Plugin, Service } from './types';

export function useRequest<D, P extends any[]>(
  service: Service<D, P>,
  options?: Options<D, P>,
  plugins?: Plugin<D, P>[],
) {
  return useRequestImplement<D, P>(service, options, [
    ...(plugins || []),
    useDebouncePlugin,
    useLoadingDelayPlugin,
    usePollingPlugin,
    useRefreshOnWindowFocusPlugin,
    useThrottlePlugin,
    useAutoRunPlugin,
    useCachePlugin,
    useRetryPlugin,
  ] as Plugin<D, P>[]);
}
