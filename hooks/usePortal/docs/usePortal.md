---
title: usePortal
group:
  title: 场景
---

# usePortal

提供了一种将子节点渲染到已有 DOM 节点中的方式，主要用于地图类服务的封装。

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
const { Portal, container }  = usePortal();
```

### Result

| 参数          | 说明            | 类型 |
|---------------|-----------------|------|
| Portal | 渲染子组件的方式 | `(props: { children: ReactNode }) => ReactPortal | null` |
| container | 创建的DOM节点 | `HTMLElement`  |
