---
title: useUpdateEffect
group:
  title: Effect
---

# useUpdateEffect

`useUpdateEffect` 用法等同于 `useEffect`，但是会忽略首次执行，只在依赖更新时执行。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

API 与 `React.useEffect` 完全一致。

```typescript
useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```
