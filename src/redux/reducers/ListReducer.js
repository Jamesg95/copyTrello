import * as Actions from '../actions/ActionTypes'
import { Lists } from '../../shared/Lists'

export const ListReducer = (state = Lists, action) => {
    switch(action.type) {
        case Actions.ADD_LIST:
        const newList = {
            id: action.listId,
            title: action.payload,
            cards: []
        }
        return [...state, newList]
        default:
            return state;
    }
}

