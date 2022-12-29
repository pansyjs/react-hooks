---
title: useModal
nav:
  title: Hooks
  path: /hooks
group:
  title: 状态
---

# useModal

优雅的使用 Modal、Drawer 弹层类组件的 Hook。

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>
<code src="./demo/demo03.tsx"></code>

## API

```ts
const { visible, data, open, close } = useModal<T>(defaultVisible?: boolean, defaultData?: T);
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
