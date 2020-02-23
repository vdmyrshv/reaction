import React from 'react'

const MessageReactions = ({messageReactions}) => {
    
    if(!messageReactions) return null

    return (
        messageReactions.map(({id, emoji, username}, index)=>(
            <span key={id}>
                <em> {username}: </em>
                {emoji}{messageReactions.length === index+1 ? "" : ","}
            </span>
        ))
    )
}

export default MessageReactions
