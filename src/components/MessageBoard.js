import React from 'react'
import { useAppContext } from './hooks'
import CreateReaction from './CreateReaction'
import MessageReactions from './MessageReactions'

const MessageBoard = () => {

    const {state, state:{messages, reactionsMap}} = useAppContext();

    console.log(state)

    return (
        <div>
            <h2>Messages</h2>
            {messages.map(msg=>(
                <div key={msg.id}>
                    <h4>{msg.text}</h4>
                    <p>by {msg.author}</p>
                    <p> on {new Date(msg.timestamp).toLocaleString()}</p>
                    <CreateReaction username={msg.author} messageId={msg.id}/>
                    <MessageReactions messageReactions={reactionsMap[msg.id]}/>
                </div>
            ))}
        </div>
    )
}

export default MessageBoard



