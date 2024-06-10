import {ADD_TO_CART} from './constants'
const initailState=[];

export  default reducer=(state=initailState,action)=>{
    switch(action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
            default:
                return state;
    }
};