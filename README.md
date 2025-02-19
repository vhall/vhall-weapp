## 微吼直播小程序组件库

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# 通过 npm 安装
npm i @vhall/weapp -S --production

# 通过 yarn 安装
yarn add @vhall/weapp --production

```

### 方式二. 下载代码

直接通过 git 下载 vhall Weapp 源代码，并将 `dist` 目录拷贝到自己的项目中。

```bash
git clone https://github.com/vhall/vhall-weapp.git
```

## 使用组件

以 web-view 组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "vhall-web-view": "@vhall/weapp/web-view/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<vhall-web-view src="{{url}}">按钮</vhall-web-view>
```

## 基础库版本

vhall Weapp 最低支持到小程序基础库 2.6.5 版本。

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。
