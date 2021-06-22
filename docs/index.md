---
title: phooks - React Hooks Library
hero:
  title: a hooks library
  desc: 
  actions:
    - text: 快速上手
      link: /zh-CN/docs/getting-started
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png
    title: 内容丰富
    desc: 拥有丰富的自定义 Hooks，每个 Hooks 都有丰富的在线示例供您体验。
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png
    title: 完备的教程
    desc: 包含适合全年龄段的丰富的 React Hooks 教程，想学 React Hooks，来这里就够了。
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png
    title: 生产可用
    desc: 已经过蚂蚁金服、淘宝、天猫等平台足够大量的线上系统的考验及打磨，健壮性值得信赖。
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by [dumi](https://d.umijs.org)
---

## 🏗 安装

```bash
# npm install
$ npm install @pansy/react-hooks --save

# yarn install
$ yarn add @pansy/react-hooks
```

## 🔨 使用

```ts
import { useBoolean } from '@pansy/react-hooks';

export default () => {
  const [visible] = useBoolean();
}
```
