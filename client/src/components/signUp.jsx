import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Signup = () => (
   <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='https://hdwallpaperz.net/wp-content/uploads/2017/03/Cute-Animal-Art-Wallpaper-2.jpg' />
          {' '}Create your Account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
             <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />
             <Form.Input
              fluid
              iconPosition='left'
              placeholder='Name'
              type='text'
            />
             <Form.Input
              fluid
              icon='house'
              iconPosition='left'
              placeholder='Street'
              type='text'
            />
             <Form.Input
              fluid
              iconPosition='left'
              placeholder='City'
              type='text'
            />
              <Form.Input
              fluid
              iconPosition='left'
              placeholder='State'
              type='text'
            />
              <Form.Input
              fluid
              iconPosition='left'
              placeholder='Zip'
              type='number'
            />

          </Segment>
        </Form>
        <Link to ='/landing'>
        <Message>
          <a href='#'>Create Account</a>
        </Message>
        </Link>
      </Grid.Column>
    </Grid>
  </div>
)

export default Signup