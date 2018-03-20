import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

<<<<<<< HEAD
export default class CategoryView extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
       activeItem: 'home'
    }
  }
=======
export default class MenuExampleCompact extends React.Component {
  state = {}
>>>>>>> 358363f4270e1ade14ebc517bb494d4530c08be7


  render() {


    return (
      <Menu compact icon='labeled'>
        <Menu.Item name='gamepad'  onClick={this.handleItemClick}>
          <Icon name='keyboard' />
          Electronics
        </Menu.Item>

        <Menu.Item name='Automotive'  onClick={this.handleItemClick}>
          <Icon name='video camera' />
          Automotive
        </Menu.Item>

        <Menu.Item name='Handyman'  onClick={this.handleItemClick}>
          <Icon name='user secret' />
          Handyman
        </Menu.Item>
                <Menu.Item name='Computer skills'  onClick={this.handleItemClick}>
          <Icon name='desktop' />
          Computer skills
        </Menu.Item>
                <Menu.Item name='Labour'  onClick={this.handleItemClick}>
          <Icon name='bell' />
          Labour
        </Menu.Item>
                <Menu.Item name='Specialty'  onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Specialty
        </Menu.Item>
                <Menu.Item name='Stuff' onClick={this.handleItemClick}>
          <Icon name='fax' />
          Stuff
        </Menu.Item>
      </Menu>
    )
  }
}