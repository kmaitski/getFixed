import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './landing.jsx'
import LoginPage from './loginPage.jsx'
import SingleProblemPage from './singleProblemPage.jsx'
import ViewConversation from './viewConversation.jsx'
import Signup from './signup.jsx'
import UserProfile from './userProfile.jsx'


class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={ Landing } />
        <Route path='/signup' component={ Signup } />
        <Route path='/landing' component={ Landing } />
        <Route path='/login' component={ LoginPage } />
        <Route path='/singleProblemPage' component={ SingleProblemPage } />
        <Route path='/userProfile' component={ UserProfile } />
        <Route path='/viewConversation' component={ ViewConversation } />
      </div>
    )
  }
}

export default App;