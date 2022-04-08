import { aliasKeyCodeMap } from './config';

import type { KeyFilter, KeyPredicate, KeyType } from './types';

// 根据 event 计算激活键数量
export function countKeyByEvent(event: KeyboardEvent) {
  const countOfModifier = Object.keys(modifierKey).reduce((total, key) => {
    if (modifierKey[key](event)) {
      return total + 1;
    }

    return total;
  }, 0);

  // 16 17 18 91 92 是修饰键的 keyCode，如果 keyCode 是修饰键，那么激活数量就是修饰键的数量，如果不是，那么就需要 +1
  return [16, 17, 18, 91, 92].includes(event.keyCode) ? countOfModifier : countOfModifier + 1;
}

// 修饰键
const modifierKey = {
  ctrl: (event: KeyboardEvent) => event.ctrlKey,
  shift: (event: KeyboardEvent) => event.shiftKey,
  alt: (event: KeyboardEvent) => event.altKey,
  meta: (event: KeyboardEvent) => event.metaKey,
};

/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */
export function genKeyFormater(keyFilter: KeyFilter, exactMatch: boolean): KeyPredicate {
  if (typeof keyFilter === 'function') {
    return keyFilter;
  }
  if (typeof keyFilter === 'string' || typeof keyFilter === 'number') {
    return (event: KeyboardEvent) => genFilterKey(event, keyFilter, exactMatch);
  }
  if (Array.isArray(keyFilter)) {
    return (event: KeyboardEvent) =>
      keyFilter.some((item) => genFilterKey(event, item, exactMatch));
  }
  return keyFilter ? () => true : () => false;
}

/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns Boolean
 */
export function genFilterKey(event: KeyboardEvent, keyFilter: KeyType, exactMatch: boolean) {
  // 浏览器自动补全 input 的时候，会触发 keyDown、keyUp 事件，但此时 event.key 等为空
  if (!event.key) {
    return false;
  }

  // 数字类型直接匹配事件的 keyCode
  if (typeof keyFilter === 'number') {
    return event.keyCode === keyFilter;
  }

  // 字符串依次判断是否有组合键
  const genArr = keyFilter.split('.');
  let genLen = 0;

  for (const key of genArr) {
    // 组合键
    const genModifier = modifierKey[key];
    // keyCode 别名
    const aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()];

    if ((genModifier?.(event)) || (aliasKeyCode && aliasKeyCode === event.keyCode)) {
      genLen++;
    }
  }

  if (exactMatch) {
    return genLen === genArr.length && countKeyByEvent(event) === genArr.length;
  }
  return genLen === genArr.length;
}
