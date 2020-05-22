import { createStore, combineReducers } from 'redux'
import { ListReducer } from '../reducers/ListReducer'
import { CardReducer } from '../reducers/CardReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            lists: ListReducer,
            cards: CardReducer
        })
    )
    return store;
}