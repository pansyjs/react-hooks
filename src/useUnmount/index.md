---
title: useUnmount
nav:
  title: Hooks
  path: /hooks
group:
  title: LifeCycle
  path: /LifeCycle
  order: 1
---

# useUnmount

在组件卸载时执行的 Hook

## 代码演示

### 基本示例

<code src="./__demo__/demo01.tsx" />

## API

```ts
useUnmount(fn: () => void);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
|--------------|--------------------------|-----------|---------|
| fn | 可选项，传入默认的状态值 | `() => void` | `false` |
