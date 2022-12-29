---
title: useCreation
group:
  title: 先进
---

# useCreation

useCreation 是 useMemo 或 useRef 的替代品。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
function useCreation<T>(factory: () => T, deps: any[]): T;
```

### Params

|参数|说明|类型|
|---|---|---|
|factory|用来创建所需对象的函数|`() => any`|
|deps|传入依赖变化的对象|`any[]`|
