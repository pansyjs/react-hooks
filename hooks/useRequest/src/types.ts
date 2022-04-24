import type { DependencyList } from 'react';
import type Fetch from './fetch';

export type Service<D, P extends any[]> = (...args: P) => Promise<D>;
export type Subscribe = () => void;

export interface FetchState<D, P extends any[]> {
  loading: boolean;
  params?: P;
  data?: D;
  error?: Error;
}

export interface CachedData<D = any, P = any> {
  data: D;
  params: P;
  time: number;
}

export interface Options<D, P extends any[]> {
  /**
   * 手动触发
   * @default false
   */
  manual?: boolean;
  /**
   * 当前请求是否准备好了
   * @default true
   */
  ready?: boolean;
  /**
   * 首次默认执行时，传递给 service 的参数
   */
  defaultParams?: P;
  /**
   * 设置 loading 变成 true 的延迟时间
   */
  loadingDelay?: number;
  /**
   * 轮询间隔，单位为毫秒。如果值大于 0，则启动轮询模式。
   */
  pollingInterval?: number;
  /**
   * 在页面隐藏时，是否继续轮询。
   * 如果设置为 false，在页面隐藏时会暂时停止轮询，页面重新显示时继续上次轮询
   */
  pollingWhenHidden?: boolean;
  /**
   * 依赖数组，当数组内容变化后，发起请求
   */
  refreshDeps?: DependencyList;
  /**
   * 在屏幕重新获取焦点或重新显示时，重新发起请求
   * @default false
   */
  refreshOnWindowFocus?: boolean;
  /**
   * 重新请求间隔，单位为毫秒
   * @default 5000
   */
  focusTimespan?: number;
  /**
   * 防抖等待时间, 单位为毫秒，设置后，进入防抖模式
   * @default false
   */
  debounceWait?: number;
  /**
   * 在延迟开始前执行调用
   * @default true
   */
  debounceLeading?: boolean;
  /**
   * 在延迟结束后执行调用
   */
  debounceTrailing?: boolean;
  /**
   * 允许被延迟的最大值
   */
  debounceMaxWait?: number;
  /**
   * 节流等待时间, 单位为毫秒，设置后，进入节流模式
   */
  throttleWait?: number;
  /**
   * 在节流开始前执行调用
   */
  throttleLeading?: boolean;
  /**
   * 在节流结束后执行调用
   */
  throttleTrailing?: boolean;
  /**
   * 错误重试次数
   */
  retryCount?: number;
  /** 重试时间间隔，单位为毫秒。 */
  retryInterval?: number;
  /**
   * 请求唯一标识
   */
  cacheKey?: string;
  /**
   * 设置缓存数据回收时间。默认缓存数据 5 分钟后回收
   * 如果设置为 -1, 则表示缓存数据永不过期
   */
  cacheTime?: number;
  /**
   * 缓存数据保持新鲜时间。在该时间间隔内，认为数据是新鲜的，不会重新发请求
   * 如果设置为 -1，则表示数据永远新鲜
   */
  staleTime?: number;
  /**
   * 判断请求是否成功
   */
  checkSuccess?: (data: D) => boolean;
  /**
   * 自定义设置缓存
   */
  setCache?: (data: CachedData<D, P>) => void;
  /**
   * 自定义读取缓存
   */
  getCache?: (params: P) => CachedData<D, P> | undefined;
  refreshDepsAction?: () => void;
  /**
   * service 执行前触发
   */
  onBefore?: (params: P) => void;
  /**
   * service resolve 时触发
   */
  onSuccess?: (data: D, params: P) => void;
  /**
   * service reject 时触发
   */
  onError?: (e: Error, params: P) => void;
  /**
   * service 执行完成时触发
   */
  onFinally?: (params: P, data?: D, e?: Error) => void;
}

export interface Result<D, P extends any[]> {
  /** service 是否正在执行 */
  loading: boolean;
  /** service 返回的数据 */
  data?: D;
  /** service 抛出的异常 */
  error?: Error;
  /**
   * 当次执行的 service 的参数数组。
   * 比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]
   */
  params: P | [];
  /**
   * 手动触发 service 执行，参数会传递给 service
   */
  run: Fetch<D, P>['run'];
  /**
   * 与 run 用法一致，但返回的是 Promise，需要自行处理异常。
   */
  runAsync: Fetch<D, P>['runAsync'];
  /**
   * 使用上一次的 params，重新调用 run
   */
  refresh: Fetch<D, P>['refresh'];
  /**
   * 使用上一次的 params，重新调用 runAsync
   */
  refreshAsync: Fetch<D, P>['refreshAsync'];
  /**
   * 直接修改 data
   */
  mutate: Fetch<D, P>['mutate'];
  /**
   * 取消当前正在进行的请求
   */
  cancel: Fetch<D, P>['cancel'];
}

export type Plugin<D, P extends any[]> = {
  (fetchInstance: Fetch<D, P>, options: Options<D, P>): PluginReturn<D, P>;
  onInit?: (options: Options<D, P>) => Partial<FetchState<D, P>>;
};

export interface PluginReturn<D, P extends any[]> {
  onBefore?: (params: P) =>
    | ({
        stopNow?: boolean;
        returnNow?: boolean;
      } & Partial<FetchState<D, P>>)
    | void;

  onRequest?: (
    service: Service<D, P>,
    params: P,
  ) => {
    servicePromise?: Promise<D>;
  };

  onSuccess?: (data: D, params: P) => void;
  onError?: (e: Error, params: P) => void;
  onFinally?: (params: P, data?: D, e?: Error) => void;
  onCancel?: () => void;
  onMutate?: (data: D) => void;
}

export type Timeout = ReturnType<typeof setTimeout>;
