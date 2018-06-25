import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './landing.jsx';
import LoginPage from './loginPage.jsx';
import SingleProblemPage from './singleProblemPage.jsx';
import Signup from './signup.jsx';
import UserProfile from './userProfile.jsx';
import PersonalProfile from './personalProfile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: ''
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin(user) {
    this.setState({
      isLoggedIn: true,
      user: user
    });
  }

  onLogout() {
    this.setState({
      isLoggedIn: false,
      user: ''
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Landing
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  onLogout={this.onLogout}
                  user={this.state.user}
                />
              );
            }}
          />
          <Route
            path="/signup"
            render={props => {
              return <Signup {...props} onLogin={this.onLogin} />;
            }}
          />
          <Route
            path="/landing/:category"
            render={props => {
              return (
                <Landing
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  onLogout={this.onLogout}
                  user={this.state.user}
                />
              );
            }}
          />
          <Route
            path="/landing"
            render={props => {
              return (
                <Landing
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  onLogout={this.onLogout}
                  user={this.state.user}
                />
              );
            }}
          />
          <Route
            path="/loginPage"
            render={props => {
              return <LoginPage {...props} onLogin={this.onLogin} />;
            }}
          />
          <Route
            path="/singleProblemPage/:id/:username"
            render={props => {
              return (
                <SingleProblemPage
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  onLogout={this.onLogout}
                  user={this.state.user}
                />
              );
            }}
          />
          <Route
            path="/personalProfile"
            render={props => {
              return (
                <PersonalProfile
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                  onLogout={this.onLogout}
                />
              );
            }}
          />
          />
          <Route
            path="/userProfile"
            render={props => {
              return (
                <UserProfile
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                  onLogout={this.onLogout}
                />
              );
            }}
          />
          />
        </Switch>
      </div>
    );
  }
}

export default App;
