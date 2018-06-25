import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      city: '',
      name: '',
      street: '',
      state: '',
      zipcode: '',
      error: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    var context = this;
    axios
      .post('/signup', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        city: this.state.city,
        name: this.state.name,
        street: this.state.street,
        state: this.state.state,
        zipcode: this.state.zipcode
      })
      .then(function(response) {
        console.log('signup success', response);
        if (response.data === 'Username already taken') {
          context.setState({ error: 'Username already taken' });
        } else {
          context.props.onLogin(response.data);
          context.props.history.push('/');
        }
      })
      .catch(function(error) {
        console.log('signup failed', error);
      });
  }

  render() {
    return (
      <div className="login-form">
        <div
          className="fixed-bottom"
          style={{ padding: ' 0px 20px 50px 10px' }}
        >
          <Link to="/landing">
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
              label="Filter"
            >
              <i className="material-icons">keyboard_return</i>
            </button>
          </Link>
        </div>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 99%;
        }
      `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="blue" textAlign="center">
              <Image src="https://hdwallpaperz.net/wp-content/uploads/2017/03/Cute-Animal-Art-Wallpaper-2.jpg" />{' '}
              Create your Account
            </Header>
            <Form size="medium">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  icon="home"
                  iconPosition="left"
                  placeholder="Street"
                  name="street"
                  value={this.state.street}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="State"
                  name="state"
                  value={this.state.state}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  iconPosition="left"
                  placeholder="Zip"
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={this.onChange}
                />
              </Segment>
            </Form>
            <Message>
              <Button
                color="blue"
                fluid
                size="large"
                onClick={this.handleClick}
              >
                Sign Up
              </Button>
            </Message>
            <Message>
              <Link to="/loginPage">
                Already have an account? Sign in here.{' '}
              </Link>
            </Message>
            {this.state.error && (
              <p style={{ color: 'red' }}>{this.state.error}</p>
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
