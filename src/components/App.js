import React, { useReducer, useContext } from 'react';
import reducer from '../state/reducer'
import Context from '../context'

import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'


function App() {

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="App">
        <h2>Reaction</h2>
        <hr/>
        <PublishMessage dispatch={dispatch} />
        <hr/>
        <MessageBoard state={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
