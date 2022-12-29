---
title: useSize
group:
  title: Dom
---

# useSize

监听 DOM 节点尺寸变化的 Hook

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>

## API

```typescript
const size = useSize(target);
```

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | DOM 节点或者 ref  | `Element` \| `(() => Element)` \| `MutableRefObject<Element>` | -      |

### Result

| 参数     | 说明                                     | 类型       |
|----------|------------------------------------------|------------|
| size  | DOM 节点的尺寸                         | `{ width: number, height: number } \| undefined`    |
