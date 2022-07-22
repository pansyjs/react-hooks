import { useEffect } from 'react';
import { createDeepCompareEffect } from './utils';

export const useDeepCompareEffect = createDeepCompareEffect(useEffect);

export default useDeepCompareEffect;
