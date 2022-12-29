---
title: useInterval
group:
  title: Effect
---

# useInterval

一个可以处理 setInterval 的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>

## API

```ts

useInterval(
  fn: () => void, 
  delay?: number,
  options?: Options,
)
```

## Params

|参数|说明|类型|
|---|---|---|
|fn|要定时调用的函数|`() => void`|
|delay|间隔时间，当取值 undefined 时会停止计时器|`number` \| `undefined`|
|options|配置定时器的行为|`Options`|

## Options

|参数|说明|类型|默认值|
|---|---|---|---|
|immediate|是否在首次渲染时立即执行|`boolean`|`false`|
