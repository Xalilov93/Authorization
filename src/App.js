import React from 'react'
import Private from './Private';
import Public from './Public';
import { UseAuth } from './hooks/useAuth';

function App() {
  const [token] = UseAuth();
  if (token) {
    return <Private/>
  }
  return <Public/>
}

export default App