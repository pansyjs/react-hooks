---
title: useRequest
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useRequest

`useRequest` 是一个强大的异步数据管理的 Hooks。

`useRequest` 通过插件式组织代码，核心代码极其简单，并且可以很方便的扩展出更高级的功能。目前已有能力包括：

- 自动请求/手动请求
- 轮询
- 防抖
- 节流
- 屏幕聚焦重新请求
- 错误重试
- loading delay
- SWR(stale-while-revalidate)
- 缓存

## 代码示例

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>
<code src="./demo/demo03.tsx"></code>
<code src="./demo/demo04.tsx"></code>
<code src="./demo/demo05.tsx"></code>

## API

```ts
const {
  loading: boolean,
  data?: D,
  error?: Error,
  params: P || [],
  run: (...params: P) => void,
  runAsync: (...params: P) => Promise<D>,
  refresh: () => void,
  refreshAsync: () => Promise<D>,
  mutate: (data?: D | ((oldData?: D) => (D | undefined))) => void,
  cancel: () => void,
} = useRequest<D, P>(
  service: (...args: P) => Promise<D>,
  {
    manual?: boolean,
    defaultParams?: TParams,
    loadingDelay?: number,
    onBefore?: (params: P) => void,
    onSuccess?: (data: D, params: P) => void,
    onError?: (e: Error, params: P) => void,
    onFinally?: (params: P, data?: D, e?: Error) => void,
  }
);
```

### Result

| 参数 | 说明   | 类型   |
|----|----|------|
| data    | service 返回的数据   | `D` \| `undefined`    |
| error   | service 抛出的异常  | `Error` \| `undefined` |
| loading | service 是否正在执行    | `boolean`    |
| params  | 当次执行的 service 的参数数组。 <br /> 比如你触发了 `run(1, 2, 3)`，则 params 等于 `[1, 2, 3]` | `P`  \| `[]`                                             |
| run | <ul><li> 手动触发 service 执行，参数会传递给 service</li><li>异常自动处理，通过 `onError` 反馈</li></ul> | `(...params: P) => void`|
| runAsync | 与 `run` 用法一致，但返回的是 Promise，需要自行处理异常。  | `(...params: P) => Promise<D>` |
| refresh      | 使用上一次的 params，重新调用 `run`  | `() => void` |
| refreshAsync | 使用上一次的 params，重新调用 `runAsync` | `() => Promise<D>`  |
| mutate       | 直接修改 `data` | `(data?: D \| ((oldData?: D) => (D \| undefined))) => void` |
| cancel       | 取消当前正在进行的请求 | `() => void`  |

### Options

| 参数 | 说明  | 类型 | 默认值  |
|---|----|---|--|
| manual        | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `run` 或 `runAsync` 触发执行。 </li></ul> | `boolean` | `false` |
| defaultParams | 首次默认执行时，传递给 service 的参数  | `P` | - |
| onBefore      | service 执行前触发  | `(params: P) => void`| -       |
| onSuccess     | service resolve 时触发 | `(data: D, params: P) => void`  | -       |
| onError       | service reject 时触发| `(e: Error, params: P) => void`| -       |
| onFinally     | service 执行完成时触发 | `(params: P, data?: D, e?: Error) => void` | -  |
