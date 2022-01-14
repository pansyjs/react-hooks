---
title: useMemoizedFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Advanced
  path: /advanced
  order: 500
---

# useMemoizedFn

持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。

在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。

```ts
const [state, setState] = useState('');

// 在 state 变化时，func 地址会变化
const fun = useCallback(
  () => {
    console.log(state);
  }, 
  [state]
);
```

使用 useMemoizedFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化。

```ts
const [state, setState] = useState('');

// fun 地址永远不会变化
const fun = useMemoizedFn(
  () => {
    console.log(state);
  }
);
```

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 性能提升

<code src="./demo/demo02.tsx" />

## API

```ts
const fn = useMemoizedFn<T>(fn: T): T;
```

### Params

| 参数 | 说明             | 类型                      | 默认值 |
|------|------------------|---------------------------|--------|
| fn   | 需要持久化的函数 | `(...args: any[]) => any` | -      |

### Result

| 参数 | 说明                      | 类型                      |
|------|---------------------------|---------------------------|
| fn   | 引用地址永远不会变化的 fn | `(...args: any[]) => any` |
