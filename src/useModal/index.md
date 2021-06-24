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

优雅的使用 Modal、Drawer 等相似组件的 Hook。

## 代码演示

### Modal组件

<code src="./__demo__/demo01.tsx" />

### Drawer组件

<code src="./__demo__/demo02.tsx" />

### Drawer组件

<code src="./__demo__/demo03.tsx" />

## API

```ts
const { initValue, visible, open, close } = useModal<T>();
```

### 参数

|---|---|---|---|
|参数|说明|类型|默认值|

### 结果

|---|---|---|
|参数|说明|类型|
|initValue|需要传入的值|`any`|
|visible|控制显示隐藏|`boolean`|
|open|打开对话框|`(initValue: T) => void`|
|close|关闭对话框|`() => void`|
