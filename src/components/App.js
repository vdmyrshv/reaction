import React, { useReducer, useContext, useEffect } from 'react';
import reducer from '../state/reducer'
import Context from '../context'

import PubSub from '../pubsub'

import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'
import SetUsername from './SetUsername'

const pubsub = new PubSub();

function App() {

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log("received message", message, "channel", channel);

        dispatch(message)
      }
    })
  },[])

  console.log('state', state);

  return (
    <Context.Provider value={{state, dispatch, pubsub}}>
      <div className="App">
        <h2>Reaction</h2>
        <hr/>
        <SetUsername />
        <hr/>
        <PublishMessage dispatch={dispatch} />
        <hr/>
        <MessageBoard state={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
