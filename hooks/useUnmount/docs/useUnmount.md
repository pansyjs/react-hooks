---
title: useUnmount
nav:
  title: Hooks
  path: /hooks
group:
  title: 生命周期
---

# useUnmount

在组件卸载时执行的 Hook

## 代码演示

<code src="./demo/demo01.tsx"></code>

## API

```ts
useUnmount(fn: () => void);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
|--------------|--------------------------|-----------|---------|
| fn | 可选项，传入默认的状态值 | `() => void` | `false` |
