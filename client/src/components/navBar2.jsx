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

    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">

          <span className="mdl-layout-title">Get Fixed! </span>

          <div className="mdl-layout-spacer"></div>
          <Input style={{width: "29vw",height: "35px"}} icon='search' placeholder='What are you looking for?' />

          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to ='/signUp'>
            <a className="mdl-navigation__link">Sign Up</a>
            </Link>
            <Link to ='/loginPage'>
            <a className="mdl-navigation__link">Login</a>
            </Link>
            <a className="mdl-navigation__link"><FixButton /></a>

          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Get Fixed!</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href=""><FixButton /></a>
          <Link to ='/signUp'>
          <a className="mdl-navigation__link" >Sign Up</a>
          </Link>
          <Link to ='/loginPage'>
          <a className="mdl-navigation__link" >Login</a>
          </Link>
          <Link to ='/UserProfile'>
          <a className="mdl-navigation__link" >My Account</a>
          </Link>
        </nav>
      </div>

    </div>
        )
  }
}

export default Navbar;