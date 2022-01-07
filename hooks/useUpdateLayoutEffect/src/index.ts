import { useLayoutEffect } from 'react';
import { createUpdateEffect } from '@pansy/hook-utils';

export const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect);
