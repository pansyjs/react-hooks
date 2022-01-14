<p align="center">
  <a href="https://react-hooks-chi.vercel.app">
    <img width="150" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210623172110.svg">
  </a>
</p>


<h1 align="center">@pansy/react-hooks</h1>

<p align="center">
  <a href="https://github.com/pansyjs/react-hooks/network">
    <img src="https://img.shields.io/github/forks/pansyjs/react-hooks.svg" alt="Forks">
  </a>
  <a href="https://github.com/pansyjs/react-hooks/stargazers">
    <img src="https://img.shields.io/github/stars/pansyjs/react-hooks.svg" alt="Stars">
  </a>
  <a href="https://www.npmjs.com/package/@pansy/react-hooks">
    <img src="https://img.shields.io/npm/v/@pansy/react-hooks.svg" alt="npm version">
  </a>
  <a href="https://packagephobia.com/result?p=@pansy/react-hooks">
    <img src="https://packagephobia.com/badge?p=@pansy/react-hooks" alt="npm version">
  </a>
</p>

## 📚 文档

[docs](https://react-hooks-chi.vercel.app/)

## ✨ 特性

- 📦 每个 Hook 单独发包，方便使用
- 🌵 包含丰富的基础 Hooks
- 💻 使用 TypeScript 编写，提供完善的类型定义

## 🏗 安装

```
// npm
npm install @pansy/react-hooks --save

// yarn
yarn add @pansy/react-hooks

// pnpm
pnpm install @pansy/react-hooks
```

**注意** 每个 Hook 单独发包，如只是用部分可单独安装对应的 Hook 包;

🔨 使用

```ts
import { useModal } from '@pansy/react-hooks';

// or
import { useModal } from '@pansy/react-modal';
```

## 🤝 参与共建

本仓库使用 [pnpm](https://pnpm.io/zh) 进行依赖管理，开发前请保证已安装

```sh
$ git clone git@github.com:pansyjs/react-hooks.git
$ cd react-hooks
$ pnpm install
$ pnpm start
```

如何创建一个Hook, 执行以下命令，会帮你创建基本的文件

```sh
pnpm run create:hook
```

