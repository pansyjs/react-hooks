import { useEffect } from 'react';
import { createDeepCompareEffect } from '@pansy/hook-utils';

export const useDeepCompareEffect = createDeepCompareEffect(useEffect);

export default useDeepCompareEffect;
