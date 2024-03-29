---
title: useScroll
group:
  title: Dom
---

# useScroll

监听元素的滚动位置的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>
<code src="./demo/demo03.tsx"></code>

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
