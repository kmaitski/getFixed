import React from 'react';
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx'
import CategoryView from './categoryView.jsx'

class  Landing extends React.Component {
    constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <CategoryView />
      Let's get Fixed
      </div>
    )
  }
}

export default Landing;
