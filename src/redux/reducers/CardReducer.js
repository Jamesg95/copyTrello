import * as Actions from '../actions/ActionTypes'
import { Cards } from '../../shared/Cards'

export const CardReducer = (state = Cards, {type,id,listId,text}) => {
    switch(type) {
        case Actions.ADD_CARD:
            return [...state, { id, listId, text }] 
        default: return state;
    }
}