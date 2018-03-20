import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import FixButton from './fixButton.jsx';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
    super(props)
    this.state = {

    }
  }




  render() {


    return (
    <div>
      <Menu fluid horizontal>
      <Link to ='/landing'>
        <Menu.Item>
          Logo
        </Menu.Item>
      </Link>
        <Menu.Item>
          <Input style={{width: "50vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item>
          <FixButton />
        </Menu.Item>
        <Link to ='/signUp'>
          <Menu.Item>
             Sign Up
          </Menu.Item>
        </Link>
        <Link to ='/loginPage'>
          <Menu.Item>
             Login
          </Menu.Item>
        </Link>
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}
export default Navbar;