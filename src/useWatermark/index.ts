import { useRef } from 'react';
import { Watermark, WatermarkOptions } from '@pansy/watermark'
import { getTargetElement } from '../utils/domTarget';
import type { BasicTarget } from '../utils/domTarget';
import { useEffectWithTarget } from '../utils/useEffectWithTarget';
import { useUnmount } from '../useUnmount';
import { useMemoizedFn } from '../useMemoizedFn';

export type BaseWatermarkOptions = Omit<WatermarkOptions, 'container'>

/**
 * 优雅的为页面添加水印的 Hook。
 * @param target 水印挂载的节点
 * @param options 水印配置
 * @returns
 */
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

  const handleUpdate = (opts: WatermarkOptions) => {
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
    update: useMemoizedFn(handleUpdate),
    show: useMemoizedFn(handleShow),
    hide: useMemoizedFn(handleHide),
  }
}
