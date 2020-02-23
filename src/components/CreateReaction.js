import React from 'react'
import { REACTION_OBJECTS } from '../state/types'
import { setReaction } from '../state/actions'
import { useAppContext } from './hooks'

const CreateReaction = ({username, messageId}) => {

    const {pubsub: {publish}} = useAppContext();

    const publishReaction=({type, emoji})=>{
        publish(setReaction({type, emoji, username, messageId}))
    }

    return (
        <div className="CreateReaction">
            {REACTION_OBJECTS.map(({type, emoji}) => (
                <span key={type} onClick={() => publishReaction({type, emoji})}>{emoji}</span>
            ))}
        </div>
    )
}

export default CreateReaction
