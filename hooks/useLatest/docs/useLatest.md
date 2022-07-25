---
title: useLatest
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

## API

```ts
const latestValueRef = useLatest<T>(value: T): React.MutableRefObject<T>;
```

## Params

|参数|说明|类型|
|---|---|---|
|value|需要设置的值|`T`|

