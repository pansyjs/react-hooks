---
title: useLatest
nav:
  title: Hooks
  path: /hooks
group:
  title: Advanced
  path: /advanced
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

## 代码演示

### 基础用法

<code src="./__demo__/demo01.tsx" />

## API

```ts
const latestValueRef = useLatest<T>(value: T): React.MutableRefObject<T>;
```

