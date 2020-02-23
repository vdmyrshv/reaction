import React from 'react'
import { useAppContext } from './hooks'
import { setUsername } from '../state/actions'

const SetUsername = () => {

    const { state, dispatch } = useAppContext()

    const handleChange = event => {
        dispatch(setUsername(event.target.value))
    }

    return (
        <div>
            <h3>Username</h3>
            <input 
                type="text" 
                placeholder="Set Username" 
                onChange={handleChange} 
                value={state.username}
                />
        </div>
    )
}

export default SetUsername
