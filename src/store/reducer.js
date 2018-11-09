
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionType.js'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item, index) => {
            if (item === action.id) {
                newState.list.splice(index,1)
            }
        })
        return newState
    }
    return state;
}