---
title: useGetState
group:
  title: 状态
---

# useGetState

给 `React.useState` 增加了一个 getter 方法，以获取当前最新值。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
const [state, setState, getState] = useGetState<S>(initialState: S | (() => S)): [S, (nextState: S | ((prevState: S) => S)) => void, () => S]
```
