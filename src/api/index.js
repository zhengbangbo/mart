import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests({ url: '/banner', method: 'get' })

export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' })

export const reqSearchInfo = (data) => requests({ url: '/list', method: 'post', data: data })

export const reqDetailInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

export const reqAddOrUpdateCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

export const reqToggleCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

export const reqSendCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

export const reqUserRegister = (phone, code, password, password1) => requests({ url: "/user/passport/register", method: 'post', data: { phone, code, password, password1 } })

export const reqUserLogin = (phone, password) => requests({ url: "/user/passport/login", method: 'post', data: { phone, password } })

export const reqUserInfo = () => requests({ url: "/user/passport/auth/getUserInfo", method: 'get' })

export const reqUserLogout = () => requests({ url: "/user/passport/logout", method: 'get' })
