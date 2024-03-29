---
title: useToggle
group:
  title: 状态
---

# useToggle

用于在两个状态值间切换的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>

## API

```ts
const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
|--------------|--------------------------|-----------|---------|
| defaultValue | 可选项，传入默认的状态值 | `T` | `false` |
| reverseValue | 可选项，传入取反的状态值 | `U` | -- |


### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| state   | 状态值   | -- |
| actions | 操作集合 | `Actions` |

### Actions

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| toggle   | 切换 state          | `() => void`            |
| set      | 修改 state          | `(state: T \| U) => void` |
| setLeft | 设置为 defaultValue | `() => void` |
| setRight | 设置为 reverseValue | `() => void` |
