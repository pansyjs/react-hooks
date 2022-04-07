---
title: useGetState
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useGetState

给 `React.useState` 增加了一个 getter 方法，以获取当前最新值。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

## API

```ts
const [state, setState, getState] = useGetState<S>(initialState: S | (() => S)): [S, (nextState: S | ((prevState: S) => S)) => void, () => S]
```
