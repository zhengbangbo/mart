import requests from "./requests";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
