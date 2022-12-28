import type { BasicTarget } from '@pansy/shared/react';

export type KeyType = number | string;

export type KeyFilter = KeyType | KeyType[] | ((event: KeyboardEvent) => boolean);

export type EventHandler = (event: KeyboardEvent) => void;

export type Target = BasicTarget<HTMLElement | Document | Window>;

export type KeyEvent = 'keydown' | 'keyup';

export interface Options {
  events?: KeyEvent[];
  target?: Target;
  exactMatch?: boolean;
  useCapture?: boolean;
}

export type KeyPredicate = (event: KeyboardEvent) => boolean;
