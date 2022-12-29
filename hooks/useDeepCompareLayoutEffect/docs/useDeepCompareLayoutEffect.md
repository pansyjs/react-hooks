---
title: useDeepCompareLayoutEffect
group:
  title: Effect
---

# useDeepCompareLayoutEffect

用法与 useEffect 一致，但 deps 通过 [lodash isEqual](https://lodash.com/docs/4.17.15#isEqual) 进行深比较。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
const [ state, { toggle, set, setTrue, setFalse }] = useBoolean(defaultValue?: boolean);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
|--------------|--------------------------|-----------|---------|
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |


### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| state   | 状态值   | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明                                              | 类型                        |
|----------|---------------------------------------------------|-----------------------------|
| toggle   | 切换 state | `() => void` |
| set   | 设置 state | `(value: boolean) => void` |
| setTrue  | 设置状态值为 true                                 | `() => void`                |
| setFalse | 设置状态值为 false                                | `() => void`                |
