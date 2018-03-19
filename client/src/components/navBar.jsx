import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       activeItem: 'home'
    }
  }




  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu stackable>
        <Menu.Item>
          logo
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>

          <Menu.Item>
            <Input icon='search' placeholder='What are you looking for?' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />

      </Menu>
      </div>
    )
  }
}
export default Navbar;