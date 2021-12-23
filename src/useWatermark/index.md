---
title: useWatermark
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
---

# useWatermark

优雅的为页面添加水印的 Hook。

更详细说明请查看 [watermark](https://watermark-eosin.vercel.app/)

## 代码演示

### 基础用法

<code src="./__demo__/demo01.tsx" />

### 多行水印

<code src="./__demo__/demo02.tsx" />

### 图片水印

<code src="./__demo__/demo03.tsx" />

## API


```ts
const { update, show, hide } = useWatermark(target, options: Options);
```

### Result

|参数|说明|类型|
|---|---|---|
|update|更新水印配置并渲染|`(options: Options) => void`|
|show|显示水印|`() => void`|
|hide|隐藏水印|`() => void`|

### Options

|参数|说明|类型|默认值|
|---|---|---|---|
|monitor|是否开启保护模式|`boolean`|`true`|
|image|图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印|`string`|-|
|text|水印文本, 为数组时表示多行水印|`string` \| `string[]`|-|
|zIndex|水印层级|`number`|`9999`|
|mode|展示模式，interval表示错行展示|`string`|`interval`|
|gapX|水印之间的水平间距|`number`|`100`|
|gapY|水印之间的垂直间距|`number`|`100`|
|offsetLeft|水印在 canvas 画布上绘制的水平偏移量|`number`|`0`|
|offsetTop|水印在 canvas 画布上绘制的垂直偏移量|`number`|`0`|
|width|单个水印宽度|`number`|`120`|
|height|单个水印高度|`number`|`64`|
|opacity|水印透明度|`number`|`0.15`|
|rotate|旋转的角度|`number`|`-22`|
|fontSize|设置字体大小|`number`|`16`|
|fontWeight|设置字体粗细|`number` \| `string` |`normal`|
|fontStyle|规定字体样式|`string`|`normal`|
|fontVariant|规定字体变体|`string`|`normal`|
|fontColor|设置字体颜色|`string`|`#000`|
|fontFamily|设置水印文字的字体|`string`|`sans-serif`|
