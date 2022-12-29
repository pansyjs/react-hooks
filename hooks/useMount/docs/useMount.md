---
title: useMount
group:
  title: 生命周期
  order: 90
---

# useMount

只在组件初始化时执行的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
useMount(fn: () => void );
```

### Params

|参数|说明|类型|
|---|---|---|
|fn|初始化时执行的函数|`() => void`|
