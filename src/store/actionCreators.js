import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionType.js'

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value) => ({
    type:ADD_TODO_ITEM
})

export const delItemAction = (id) => ({
    type:DEL_TODO_ITEM,
    id
})