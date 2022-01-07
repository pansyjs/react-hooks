import type { MutableRefObject } from 'react';
import { isBrowser } from './isBrowser';

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

/**
 * 获取Dom节点
 * @param target
 * @param defaultElement
 * @returns
 */
export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
  if (!isBrowser) return undefined;

  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetValue<T>;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
