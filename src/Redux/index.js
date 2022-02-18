import data from '../data'
const redux = require('redux');

export function getData(){
    return{
        type:"GET_DATA",
        
    }
}

export function filterData(query){
    return{
        type:"FILTER_DATA",
        payload:query
    }
}

export function deleteData(id){
    return{
        type:"DELETE_DATA",
        payload:id
    }
}
export function newUser(username){
    return{
        type:"NEW_USER",
        payload:username
    }
}

export function getName(name){
    return{
        type:"GET_NAME",
        payload:name
    }
}
export function login(){
    return{
        type:"LOGIN"
    }
}
const initialState = {
    userData:data,
    filterData:data,
    name:"",
    login:false
}
function userDataReducer(state = initialState,action){
    switch(action.type){
        case "GET_DATA":
            return state.userData
        case "FILTER_DATA":
            if(action.payload.toString() === 'all'){
                return{
                    ...state,
                    filterData:state.userData
                }
            }
            else if(action.payload.toString() === 'active' || action.payload.toString() === 'closed'){
            const neww = state.userData.filter(item => item.status === action.payload.toString())
            console.log("NEWE",neww)
            return {
                ...state,
                filterData:neww
            }
        }
        else{
            const neww = state.userData.filter(item => item.company === action.payload.toString())
            return {
                ...state,
                filterData:neww
            }
        }

        case "DELETE_DATA":
            const neww = state.userData.filter(item => item.id !== action.payload)
            return{
                ...state,
                userData:neww,
                filterData: state.filterData.filter(item => item.id !== action.payload)
            }
        case "NEW_USER":
            console.log(action.payload)
            return{
                ...state,
                // filterData:[...state.filterData,action.payload],
                userData:[...state.userData,action.payload]
            }   
        case "GET_NAME":
            return{
                ...state,
                name:action.payload
            }   
        case "LOGIN":
            return{
                ...state,
                login: !state.login
            }      
        default:
            return state 

    }
}

const store = redux.createStore(userDataReducer)
store.subscribe(() => console.log(store.getState()))
export default store
