import {ADD_TO_CART,REMOVE_FROM_CART} from './constants'
const initailState=[];

export  default reducer=(state=initailState,action)=>{
    switch(action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
            case REMOVE_FROM_CART:
                let result=state.filter((item)=>{
                    item.name!=action.data
                })
            return [...result]
            
            default:
                return state;
    }
};