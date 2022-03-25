export type Status = 'unset' | 'loading' | 'ready' | 'error';

export interface Options {
  type?: 'js' | 'css';
  js?: Partial<HTMLScriptElement>;
  css?: Partial<HTMLStyleElement>;
}

export interface LoadResult {
  ref: Element;
  status: Status;
}
