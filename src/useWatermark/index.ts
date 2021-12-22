import { useRef } from 'react';
import { Watermark, WatermarkOptions } from '@pansy/watermark'
import { getTargetElement } from '../utils/domTarget';
import type { BasicTarget } from '../utils/domTarget';
import { useEffectWithTarget } from '../utils/useEffectWithTarget';
import { useUnmount } from '../useUnmount';

export type BaseWatermarkOptions = Omit<WatermarkOptions, 'container'>

export function useWatermark(
  target: BasicTarget,
  options: BaseWatermarkOptions = {},
) {
  const elRef = useRef<HTMLElement>();
  const watermark = useRef<Watermark>();

  useEffectWithTarget(
    () => {
      elRef.current = getTargetElement(target) as HTMLElement;

      if (watermark.current) {
        watermark.current.destroy();
      }

      watermark.current = new Watermark({
        ...options,
        container: elRef.current
      });
    },
    [],
    target
  );

  useUnmount(() => {
    if (watermark.current) {
      watermark.current.destroy();
    }
  });

  const handleUpdate = (opts: Watermark) => {
    if (watermark.current) {
      watermark.current.update(opts);
    }
  }

  const handleShow = () => {
    if (watermark.current) {
      watermark.current.show();
    }
  }

  const handleHide = () => {
    if (watermark.current) {
      watermark.current.show();
    }
  }

  return {
    update: handleUpdate,
    show: handleShow,
    hide: handleHide,
  }
}
