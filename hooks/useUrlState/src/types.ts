import type { ParseOptions, StringifyOptions } from 'query-string';

export interface Options {
  navigateMode?: 'push' | 'replace';
  parseOptions?: ParseOptions;
  stringifyOptions?: StringifyOptions;
}

export type UrlState = Record<string, any>;

export type State<S> = Partial<{ [key in keyof S]: any }>;
