import * as Actions from './ActionTypes'

export const addList = (title) => ({
        type: Actions.ADD_LIST,
        title,
        listId: Math.floor(Math.random()*1000000)
})

export const addCard = (text, listId) => {
        return ({
        type: Actions.ADD_CARD,
        id: Math.floor(Math.random()*1000000),
        text, 
        listId,
}) }