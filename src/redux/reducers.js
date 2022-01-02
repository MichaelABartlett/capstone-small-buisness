import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = []) => state

const map = (state = []) => state

const listing = (state = [], action) => {
    switch(action.type) {
       
        case 'ADD_LISTING':
            return [...state,action.value]
        case 'REMOVE_LISTING':
            const newState = [ ...state ]
            console.log('this is the action' ,action.value)
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}



export default combineReducers({ user, cars, listing, map })