import { useMemo } from 'react';
import { useRequest } from '@pansy/use-request';
import { useMemoizedFn } from '@pansy/use-memoized-fn';

import type { Data, Service, Params, PaginationOptions } from './types';

export const usePagination = <D extends Data, P extends Params>(
  service: Service<D, P>,
  options: PaginationOptions<D, P> = {},
) => {
  const { defaultPageSize = 10, defaultCurrent = 1, ...rest } = options;

  const result = useRequest(service, {
    defaultParams: [{ current: defaultCurrent, pageSize: defaultPageSize }],
    refreshDepsAction: () => {
      changeCurrent(1);
    },
    ...rest,
  });

  const { current = 1, pageSize = defaultPageSize } = result.params[0] || {};

  const total = result.data?.total || 0;
  const totalPage = useMemo(() => Math.ceil(total / pageSize), [pageSize, total]);

  const onChange = (c: number, p: number) => {
    let toCurrent = c <= 0 ? 1 : c;
    const toPageSize = p <= 0 ? 1 : p;
    const tempTotalPage = Math.ceil(total / toPageSize);
    if (toCurrent > tempTotalPage) {
      toCurrent = Math.max(1, tempTotalPage);
    }

    const [oldPaginationParams = {}, ...restParams] = result.params || [];

    result.run(
      {
        ...oldPaginationParams,
        current: toCurrent,
        pageSize: toPageSize,
      },
      ...restParams,
    );
  };

  const changeCurrent = (c: number) => {
    onChange(c, pageSize);
  };

  const changePageSize = (p: number) => {
    onChange(current, p);
  };

  return {
    ...result,
    pagination: {
      current,
      pageSize,
      total,
      totalPage,
      onChange: useMemoizedFn(onChange),
      changeCurrent: useMemoizedFn(changeCurrent),
      changePageSize: useMemoizedFn(changePageSize),
    },
  }
}
