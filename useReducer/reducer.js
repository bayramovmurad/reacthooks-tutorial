import { DECREMENT, INCREMENT } from "./action"


const reducer = (state,action) => {
    if(action.type === INCREMENT){
        const inc = state.count +1
        return{...state, count:inc}
    }
    if (action.type === DECREMENT) {
        const dec = state.count  -1
        return { ...state, count:dec }
    }
}
export default reducer