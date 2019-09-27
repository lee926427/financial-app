import { USER, SEARCH, FAVORITE, APP, } from "../actions/actionTypes";

const initState = {
    user:{},
    loading_animate:false,
    register_Animate:false,
    queryStock:{},
    etfList:[],
    favorite:[],
    searchHistory:[],
    version:""
}

export default function(state=initState,action){
    switch(action.type){
        case USER.LOGIN:
            return {...state,loading_animate:true};
        case USER.LOGIN_ACCESS:
            return {...state,loading_animate:false,user:action.user.data};
        case USER.LOGIN_FAILED:
            return {...state,loading_animate:false,reason:action.reason.data};
        case USER.REGISTER:
            return {...state,register_Animate:true};
        case USER.REGISTER_ACCESS:
            return {...state,register_Animate:false};
        case USER.REGISTER_FAILED:
            return {...state,register_Animate:false,reason:action.reason.data};
        case FAVORITE.GET:
            return {...state,favorite:action.favoriteList.data} 
        case FAVORITE.APPEND:
            return {...state,favorite:[...state.favorite,action.payload]};
        case FAVORITE.DELETE:
            return {...state,remove:state.favorite.filter( number => action.removeID === number)};
        case SEARCH.ETFSYMBOL:
            return {...state,etfList:action.payload.data}
        case SEARCH.STOCKPRICE:
            return {...state,queryStock:action.payload.data}
        case APP.VERSION:
            return {...state,version:action.version.data}
        default:
            return state
    }
}