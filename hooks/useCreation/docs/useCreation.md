---
title: useCreation
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useCreation

useCreation 是 useMemo 或 useRef 的替代品。

## 代码演示

### 基本示例

<code src="./demo/demo01.tsx" />

## API

```ts
function useCreation<T>(factory: () => T, deps: any[]): T;
```

### Params

|参数|说明|类型|
|---|---|---|
|factory|用来创建所需对象的函数|`() => any`|
|deps|传入依赖变化的对象|`any[]`|
