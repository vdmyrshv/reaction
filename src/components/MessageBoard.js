import React from 'react'
import { useAppContext } from './hooks'

const MessageBoard = () => {

    const {state: {messages}} = useAppContext()

    return (
        <div>
            <h2>Messages</h2>
            {messages.map(msg=>(
                <div key={msg.id}>
                    <h4>{msg.text}</h4>
                    <p>Published on {new Date(msg.timestamp).toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageBoard



