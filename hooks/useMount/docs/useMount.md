---
title: useMount
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useMount

只在组件初始化时执行的 Hook。

## 代码演示

### 基本示例

<code src="./demo/demo01.tsx" />

## API

```ts
useMount(fn: () => void );
```

### Params

|参数|说明|类型|
|---|---|---|
|fn|初始化时执行的函数|`() => void`|
