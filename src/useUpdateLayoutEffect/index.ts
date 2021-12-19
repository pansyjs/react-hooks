import { useLayoutEffect } from 'react';
import { createUpdateEffect } from '../utils/createUpdateEffect';

export const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect);
