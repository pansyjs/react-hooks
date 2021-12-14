---
title: useModal
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
---

# useModal

优雅的使用 Modal、Drawer 等类弹层的 Hook。

## 代码演示

### Modal

<code src="./__demo__/demo01.tsx" />

### Drawer

<code src="./__demo__/demo02.tsx" />

### initialValue

<code src="./__demo__/demo03.tsx" />

## API

```ts
const { visible, initialValue, open, close } = useModal<T>(initialValue?: T);
```

### Result

|参数|说明|类型|
|---|---|---|
|initialValue|需要传入的值|`T`|
|visible|控制显示隐藏|`boolean`|
|open|打开对话框|`(value?: T) => void`|
|close|关闭对话框|`() => void`|
