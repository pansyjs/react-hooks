---
title: useMouse
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useMouse

监听鼠标位置

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 获取鼠标相对于元素的位置

<code src="./demo/demo02.tsx" />

## API

```ts
const state: {
  screenX: number, 
  screenY: number, 
  clientX: number, 
  clientY: number,
  pageX: number,
  pageY: number,
  elementX: number,
  elementY: number,
  elementH: number,
  elementW: number,
  elementPosX: number,
  elementPosY: number,
} = useMouse(target?: Target);
```

### Params

|参数|说明|类型|
|---|---|---|
|defaultVisible|默认的开关状态|`boolean`|
|defaultData|默认的数据|`T`|

### Result

|参数|说明|类型|
|---|---|---|
|data|需要传入的值|`T`|
|visible|开关状态|`boolean`|
|open|打开对话框|`(value?: T) => void`|
|close|关闭对话框|`() => void`|
