import React, { useState } from 'react'

import { userContext } from './context';
import Content2 from './context-content2';
import Headers2 from './context-header2';



function App() {
  let [user, setUser] = useState()
  return (
    <userContext.Provider value={[user, setUser]}>
      <Headers2/>
      <Content2/>
    </userContext.Provider>
  )
}

export default App;
