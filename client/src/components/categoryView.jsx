import React, { Component } from 'react';
import { Button, Divider} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class CategoryView extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       activeItem: 'home'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let category = e.target.innerText.toLowerCase();
    this.props.history.push(`/landing/${category}`);
  }

  render() {
    return (

      <div className="sidebar">
        <Button.Group vertical>
        <Link to ='/landing'>
        <Button color='violet'>Show All</Button>
        </Link>
        <div onClick={this.handleClick}>
          <Button color='orange'>Automotive</Button>
          <Button color='yellow'>HandyMan</Button>
          <Button color='blue'>Computers</Button>
          <Button color='green'>General Labour</Button>
          <Button color='teal'>Specialty</Button>
          <Button color='purple'>Electronics</Button>
          <Button color='grey'>Free Stuff</Button>
        </div>
        </Button.Group>
      </div>
    )
  }
}

export default withRouter(CategoryView);