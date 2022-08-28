import type { BasicTarget } from '@pansy/shared/react';

export interface Position {
  left: number;
  top: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
};

export type Target = BasicTarget<Element | Document>;
export type ScrollListenController = (val: Position) => boolean;
