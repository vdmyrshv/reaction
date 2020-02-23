import { NEW_MESSAGE, NEW_USERNAME } from './types'

const reducer = ( state, action ) => {
    switch(action.type){
        case NEW_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]};
        case NEW_USERNAME:
            return {...state, username: action.payload};
        default:
            return state;
    }
}

export default reducer;