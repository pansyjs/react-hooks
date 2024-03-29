---
title: useKeyPress
group:
  title: Dom
---

# useKeyPress

监听键盘按键，支持组合键，支持按键别名。

## 代码演示

<code src="./demo/demo01.tsx"></code>
<code src="./demo/demo02.tsx"></code>
<code src="./demo/demo03.tsx"></code>
<code src="./demo/demo04.tsx"></code>
<code src="./demo/demo05.tsx"></code>
<code src="./demo/demo06.tsx"></code>

## API

```ts
type keyType = number | string;
type KeyFilter = keyType | keyType[] | ((event: KeyboardEvent) => boolean);

useKeyPress(
  keyFilter: KeyFilter, 
  eventHandler: EventHandler, 
  options?: Options
)
```

### Params

| 参数    | 说明             | 类型                                                        | 默认值 |
|---------|------------------|-------------------------------------------------------------|--------|
| keyFilter| 支持 keyCode、别名、组合键、数组，自定义函数 | `keyType | keyType[] | (event: KeyboardEvent) => boolean` | - |
| eventHandler| 回调函数 | `(event: KeyboardEvent) => void` | - |
| options | 可选配置项 | `Options` | - |

### Options

| 参数    | 说明             | 类型                                                        | 默认值 |
|---------|------------------|-------------------------------------------------------------|--------|
| events | 触发事件 | `('keydown' | 'keyup')[]` | `['keydown']` |
| target | DOM 节点或者 ref | `() => Element | Element | MutableRefObject<Element>` | `['keydown']` |
| exactMatch | 精确匹配。如果开启，则只有在按键完全匹配的情况下触发事件。比如按键 [shif + c] 不会触发 [c] | `boolean` | `false` |
