import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests({ url: '/banner', method: 'get' })

export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' })
