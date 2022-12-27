import { useLayoutEffect } from 'react';
import { createEffectWithTarget } from './createEffectWithTarget';

export const useLayoutEffectWithTarget = createEffectWithTarget(useLayoutEffect);
