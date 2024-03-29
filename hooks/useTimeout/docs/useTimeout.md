---
title: useTimeout
group:
  title: Effect
---

# useTimeout

一个可以处理 setTimeout 计时器函数的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
useTimeout(fn: () => void, delay?: number);
```

## Params

|参数|说明|类型|
|---|---|---|
|fn|待执行函数|`() => void`|
|delay|定时时间（单位为毫秒），当取值为 undefined 时会停止计时器|`number` \| `undefined`|
