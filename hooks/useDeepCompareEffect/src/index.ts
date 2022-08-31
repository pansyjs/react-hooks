import { useEffect } from 'react';
import { createDeepCompareEffect } from '@pansy/shared/react';

export const useDeepCompareEffect = createDeepCompareEffect(useEffect);

export default useDeepCompareEffect;
