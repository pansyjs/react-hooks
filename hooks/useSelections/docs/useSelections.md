---
title: useSelections
nav:
  title: Hooks
  path: /hooks
group:
  path: /
---

# useSelections

常见联动 Checkbox 逻辑封装，支持多选，单选，全选逻辑，还提供了是否选择，是否全选，是否半选的状态。

## 代码演示

### 基础用法

<code src="./demo/demo01.tsx" />

### 进阶用法

<code src="./demo/demo02.tsx" />

### 分页

<code src="./demo/demo03.tsx" />

## API

```ts
const result: Result= useSelections(
  items: (number | string)[], 
  defaultSelected?: (number | string)[]
);
```

### Params

| 参数 | 说明             | 类型                      |
|------|------------------|---------------------------|
| items | 数据源 | `(number \| string)[]` |
| defaultSelected | 默认选中的项 | `(number \| string)[]` |

### Result

| 参数              | 说明               | 类型                    |
|-------------------|--------------------|-------------------------|
| selected          | 已经选择的元素     | `array`                 |
| allSelected       | 是否全选           | `boolean`               |
| noneSelected      | 是否一个都没有选择 | `boolean`               |
| partiallySelected | 是否半选           | `boolean`               |
| isSelected        | 是否被选择         | `(value: number \| string) => boolean` |
| setSelected       | 设置选择的元素     | `(value: (number \| string)[]) => void`   |
| select            | 选择元素           | `(value: number \| string) => void`    |
| unSelect          | 取消选择元素       | `(value: number \| string) => void`    |
| toggle            | 反选元素           | `(value: number \| string) => void`    |
| selectAll         | 选择全部元素       | `() => void`            |
| unSelectAll       | 取消选择全部元素   | `() => void`            |
| toggleAll         | 反选全部元素       | `() => void`            |
