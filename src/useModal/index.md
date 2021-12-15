---
title: useModal
nav:
  title: Hooks
  path: /hooks
group:
  title: Scene
  path: /scene
  order: 1
---

# useModal

优雅的使用 Modal、Drawer 等类弹层的 Hook。

## 代码演示

### Modal

<code src="./__demo__/demo01.tsx" />

### Drawer

<code src="./__demo__/demo02.tsx" />

### data

<code src="./__demo__/demo03.tsx" />

## API

```ts
const { visible, data, open, close } = useModal<T>(initVisible?: boolean, initData?: T);
```

### Result

|参数|说明|类型|
|---|---|---|
|data|需要传入的值|`T`|
|visible|控制显示隐藏|`boolean`|
|open|打开对话框|`(value?: T) => void`|
|close|关闭对话框|`() => void`|
