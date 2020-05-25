import * as Actions from '../actions/ActionTypes'
import { Lists } from '../../shared/Lists'

export const ListReducer = (state = Lists, action) => {
    switch(action.type) {
        case Actions.ADD_LIST:
            return [...state, {
                id: action.listId,
                title: action.title,
            }]
        default:
            return state;
    }
}