import { NEW_MESSAGE } from './types'
import uuid from 'uuid/v4'

export const newMessage = text => ({
        type: NEW_MESSAGE,
        payload: {id: uuid(), text, timestamp: Date.now()}
    }
)