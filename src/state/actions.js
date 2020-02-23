import { NEW_MESSAGE, NEW_USERNAME } from './types'
import uuid from 'uuid/v4'

export const newMessage = ({text, author}) => ({
        type: NEW_MESSAGE,
        payload: {id: uuid(), text, author, timestamp: Date.now()}
    }
)

export const setUsername = text => ({
        type: NEW_USERNAME,
        payload: text
    }
)