# Web 商城

一个普通的商城前端，是跟随视频教程学习的练习项目。

[https://market-front-vue2-app.vercel.app](https://market-front-vue2-app.vercel.app)

测试账号：13700000000
测试密码：111111

## 技术栈
* vue2 + vue-router3 + vuex3
* less + element-ui + swiper + qrcode + nprogress
* vue-lazyload + lodash
* axios + mockjs
* uuid

## 部署相关

原接口和原图片资源都是使用 http 协议。而本项目部署在 Vercel 上，默认采用 https，无法使用 http 资源。因此进行了一些额外操作。

1. 后端接口使用 [CloudFlare Workers](https://workers.cloudflare.com/) 反向代理。
2. 接口返回的图片 URL 全部替换为[本地图片](./public/images/default.png)。（原图片资源使用 ip 访问，反向代理遭遇备案墙，不得已为之）

## 相关

- [视频教程](https://www.bilibili.com/video/BV1Vf4y1T7bw)
