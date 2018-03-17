import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './landing.jsx'
import NavBar from './navBar.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={ Landing } />
      </div>
    )
  }
}

export default App;