import * as Actions from '../actions/ActionTypes'
import { Lists } from '../../shared/Lists'

export const CardReducer = (state = Lists, action) => {
    switch(action.type) {
        case Actions.ADD_CARD:
        const newCard = {
            id: action.randomNum,
            text: action.payload 
        } 

        console.log('action listId', action.listId)

        const newState = state.map((list) => {
            console.log('list.id', list.id, 'isMatch', (list.id === action.listId) )
            if(list.id === action.listId) {
                return {...list, cards: [...list.cards, newCard]}
            }
            else {
                return list
            }
        }) 
        return newState
        
        
        default: 
            return state;
    }
}