---
title: useClickAway
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
---

# useClickAway

监听目标元素外的点击事件。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 自定义 DOM

<code src="./demo/demo02.tsx" />

### 支持多个 DOM 对象

<code src="./demo/demo03.tsx" />

### 监听其它事件

<code src="./demo/demo04.tsx" />


## API

```typescript
type Target = Element | (() => Element) | React.MutableRefObject<Element>;

useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: Target | Target[],
  eventName?: string
);
```

### Params

| 参数        | 说明                       | 类型                   | 默认值  |
|-------------|----------------------------|------------------------|---------|
| onClickAway | 触发函数                   | `(event: T) => void`   | -       |
| target      | DOM 节点或者 Ref，支持数组 | `Target` \| `Target[]` | -       |
| eventName   | 指定需要监听的事件         | `string`               | `click` |
