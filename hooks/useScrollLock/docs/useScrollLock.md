---
title: useScrollLock
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useScrollLock

锁定元素的滚动。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

## API

```ts
const [state, { toggle, set, get }] = useScrollLock(target, initialState);
```

### Params

| 参数         | 说明                  | 类型                                        | 默认值                                   |
|--------------|-----------------------|---------------------------------------------|------------------------------------------|
| target       | DOM 节点或者 ref | `Element` \| `Document`  \| `(() => Element)` \| `MutableRefObject<Element>`   | -- |
| initialState | 初始状态  | `boolean` | `false` |


### Result

| 参数     | 说明                   | 类型                          |
|----------|------------------------|-------------------------------|
| state | 状态值 | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明                   | 类型                          |
|----------|------------------------|-------------------------------|
| toggle | 切换锁定状态 | `() => void` |
| set | 设置锁定状态 | `(state: boolean) => void` |
| get | 获取锁定状态 | `() => boolean` |
