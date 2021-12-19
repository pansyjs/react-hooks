import { useEffect } from 'react';
import { createUpdateEffect } from '../utils/createUpdateEffect';

/**
 * useUpdateEffect 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行
 */
export const useUpdateEffect = createUpdateEffect(useEffect);
