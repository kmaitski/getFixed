import React, { Component } from 'react';
import { Input, Menu, Button} from 'semantic-ui-react';
import FixButton from './fixButton.jsx';
import CamShot from './cameraFunction.jsx';
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
      <Menu className="fluid horizontal">
      <Link to ='/landing'>
        <Menu.Item>
          <Button basic color='red' content='Home' />
        </Menu.Item>
      </Link>
        <Menu.Item>
          <Input style={{width: "50vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />
        </Menu.Item>
        <Menu.Menu>
        <Menu.Item>
          <FixButton />
        </Menu.Item>
        <Link to ='/signUp'>
          <Menu.Item>
             <Button basic color='teal' content='Sign Up' />
          </Menu.Item>
        </Link>
        <Link to ='/loginPage'>
          <Menu.Item>
             <Button basic color='teal' content='Login' />
          </Menu.Item>
        </Link>
          <Menu.Item>
             <CamShot />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default Navbar;