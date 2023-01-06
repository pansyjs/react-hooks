<p align="center">
  <a href="https://react-hooks-chi.vercel.app">
    <img width="150" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210623172110.svg">
  </a>
</p>


<h1 align="center">@pansy/react-hooks</h1>

<div align="center">

[![NPM version][image-1]][npm-url]
[![NPM downloads][image-2]][npm-url]
[![codecov][codecov-1]][codecov-2]
[![license][license-1]][npm-url]
[![issues](https://img.shields.io/github/issues/pansyjs/react-hooks)](https://github.com/pansyjs/react-hooks/issues)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/pansyjs/react-hooks.svg)](http://isitmaintained.com/project/pansyjs/react-hooks 'Percentage of issues still open')
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/pansyjs/react-hooks.svg)](http://isitmaintained.com/project/pansyjs/react-hooks 'Average time to resolve an issue')

</div>

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
import { useModal } from '@pansy/use-modal';
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
pnpm run hooks:create
```

[image-1]: https://img.shields.io/npm/v/@pansy/react-hooks.svg?style=flat
[image-2]: https://img.shields.io/npm/dw/@pansy/react-hooks.svg?style=flat
[codecov-1]: https://codecov.io/github/pansyjs/react-hooks/branch/master/graph/badge.svg?token=EKYDUW28H0
[codecov-2]: https://codecov.io/github/pansyjs/react-hooks
[license-1]: https://badgen.net/npm/license/@pansy/react-hooks
[npm-url]: https://www.npmjs.com/package/@pansy/react-hooks
[issues-1]: https://www.npmjs.com/package/@pansy/react-hooks
