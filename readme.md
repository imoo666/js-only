# 纯原生 js 模块化项目

**此项目主要用于超小型原生 web 开发，很适用于单片机起 web 服务**

## 项目特点

1. 足够小，打包后 demo 仅 7kb（可以删去不需要的组件来变得更小）
2. 纯原生模块化（web components），不需要学习 react / vue 即可将庞大的 html 分解为若干模块
3. 提供了常用前端的解决方案（组件化、通信、数据绑定等）
4. 提供了基础组件： 蒙版<components-mask>，消息<message>，图标<icon>
5. 调整了打包，打包后仅一行 html，且提供了 cpp 可调用的文件
6. 由于使用了原生特性，可以兼容进任意框架（react、vue 等）项目

## 项目使用（依赖于 node）

1. 项目依赖安装：pnpm i
2. 项目运行：pnpm run dev
3. 项目打包：pnpm run build，打包的文件可以在 dist 文件夹中找到

## 项目实例（经过了2次开发）
![141724299165_ pic](https://github.com/user-attachments/assets/5dca9a00-9c5c-4999-8f06-916bb1da21ba)
