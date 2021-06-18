module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    // 类型定义的全局命名空间
    NodeJS: 'readonly'
  },
  rules: {}
};
