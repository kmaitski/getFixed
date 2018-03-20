import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Signup = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Signup