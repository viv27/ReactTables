import data from '../data'

export function getData(){
    return{
        type:"GET_DATA",
        
    }
}
const initialState = {
    userData:data,
}
export default function userDataReducer(state = initialState,action){
    switch(action.type){
        case "GET_DATA":
            return state.userData
        default:
            return state 

    }
}