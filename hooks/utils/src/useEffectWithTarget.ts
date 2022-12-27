import { useEffect } from 'react';
import { createEffectWithTarget } from './createEffectWithTarget';

export const useEffectWithTarget = createEffectWithTarget(useEffect);
