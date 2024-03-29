---
title: useUpdateLayoutEffect
group:
  title: Effect
---

# useUpdateLayoutEffect

`useUpdateLayoutEffect` 用法等同于 `useLayoutEffect`，但是会忽略首次执行，只在依赖更新时执行。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

API 与 `React.useLayoutEffect` 完全一致。

```typescript
useUpdateLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```
