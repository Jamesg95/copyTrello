import * as Actions from './ActionTypes'

export const addList = (title) => ({
        type: Actions.ADD_LIST,
        payload: title,
        listId: Math.floor(Math.random()*1000000)
})

export const addCard = (text, listId) => ({
        type: Actions.ADD_CARD,
        payload: text, 
        listId: listId,
        randomNum: Math.floor(Math.random()*1000000)
}) 

