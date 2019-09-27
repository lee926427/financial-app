import { APP, USER, FAVORITE, SEARCH } from "./actionTypes";

export const app = {
  queryAppVersion: ver => ({ type: APP.VERSION,version:ver })
};
export const user = {
  login: () => ({ type: USER.LOGIN, loading:true }),
  loginAccess:user =>({type:USER.LOGIN_ACCESS, loading:false, user}),
  loginFailed: reason => ({type:USER.LOGIN_FAILED,reason, loading:false }),
  logout: () => ({ type: USER.LOGOUT }),
  register: userData => ({ type: USER.REGISTER, loading:true, userData }),
  registerAccess: user => ({ type:USER.REGISTER_ACCESS, loading:false, user }),
  registerFailed: reason => ({type:USER.REGISTER_FAILED, loading:false, reason }),
  getInfo: data => ({ type: USER.GETINFO,user:data }),
  getToken: data => ({ type: USER.GETTOKEN, token:data}),
  modifyUserInfo: userData => ({
    type: USER.MODIFYUSERINFO,
    paylaod: userData
  }),
  forgetPassword: () => ({ type: USER.FORGETPASSWORD }),
  changePassword: () => ({ type: USER.CHANGEPASSWORD })
};
export const favorite = {
  append: stock => ({ type: FAVORITE.APPEND, payload: stock }),
  remove: id => ({ type: FAVORITE.DELETE, removeID:id }),
  get: list => ({ type: FAVORITE.GET, favoriteList:list })
};
export const search = {
  etfIngradient: etfData => ({
    type: SEARCH.ETFSYMBOL,
    payload: etfData
  }),
  stocknumber: number => ({ type: SEARCH.STOCKPRICE, paylaod: number })
};
