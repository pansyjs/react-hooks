---
title: Pansy Hooks - React Hooks Library
hero:
  title: Pansy Hooks
  description: 一套高质量可靠的 React Hooks 库
  actions:
    - text: 快速上手
      link: /hooks/use-modal
---

## 🏗 安装

```bash
# npm install
$ npm install @pansy/react-hooks --save

# yarn install
$ yarn add @pansy/react-hooks

# pnpm install
$ pnpm i @pansy/react-hooks
```

## 🔨 使用

```ts
import { useBoolean } from '@pansy/react-hooks';

export default () => {
  const [visible] = useBoolean();
}
```
