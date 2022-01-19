---
title: useScroll
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
---

# useScroll

监听元素的滚动位置的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 监测整页的滚动

<code src="./demo/demo02.tsx" />

### 控制滚动状态的监听

<code src="./demo/demo03.tsx" />

## API

```ts
const position = useScroll(target, shouldUpdate);
```

### Params

| 参数         | 说明                  | 类型                                        | 默认值                                   |
|--------------|-----------------------|---------------------------------------------|------------------------------------------|
| target       | DOM 节点或者 ref | `Element` \| `Document`  \| `(() => Element)` \| `MutableRefObject<Element>`   | `document` |
| shouldUpdate | 控制是否更新滚动信息  | `({ top: number, left: number }) => boolean` | - |


### Result

| 参数     | 说明                   | 类型                          |
|----------|------------------------|-------------------------------|
| position | 滚动容器当前的滚动位置 | `{ left: number; top: number; direction: Direction; } \| undefined` |

### Direction

| 参数     | 说明                   | 类型                          |
|----------|------------------------|-------------------------------|
| direction | 滚动的方向 | `'top' \| 'bottom' \| 'left' \| 'right'` |
