---
title: phooks - React Hooks Library
hero:
  title: a react hooks library
  desc: 
  actions:
    - text: 快速上手
      link: /zh-CN/docs/getting-started
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png
    title: 内容丰富
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png
    title: 完备的教程
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png
    title: 生产可用
footer: Open-source MIT Licensed | Copyright © 2020-present
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
