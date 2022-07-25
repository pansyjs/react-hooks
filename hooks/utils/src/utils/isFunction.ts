/**
 * 判断值是否为一个方法
 * @param value
 * @returns
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}
