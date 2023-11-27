import type { Options, Result } from '@pansy/use-request';

export interface Data<D = any> {
  total: number;
  list: D[];
}

export type Params = [{ current: number; pageSize: number; [key: string]: any }, ...any[]];

export type Service<D extends Data, TParams extends Params> = (
  ...args: TParams
) => Promise<D>;

export interface PaginationResult<D extends Data, P extends Params>
  extends Result<D, P> {
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    totalPage: number;
    onChange: (current: number, pageSize: number) => void;
    changeCurrent: (current: number) => void;
    changePageSize: (pageSize: number) => void;
  };
}

export interface PaginationOptions<D extends Data, P extends Params>
  extends Options<D, P> {
  defaultPageSize?: number;
  defaultCurrent?: number;
}
