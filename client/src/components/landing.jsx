import React from 'react';
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';



const problems = [
    {
      id: 123,
      title: 'Broken Watch',
      description: 'Needs new hands and battery',
    },
    {
      id: 124,
      title: 'Antique table needs new leg',
      description: `My grandmother's heirloom table has a broken leg, and we hope someone can help us fix dat shit`
    },
    {
      id: 125,
      title: `My iPhone's screen don't work`,
      description: `Shit's broke`
    }
  ]

class Landing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
       <Link to ='/signUp'> test button </Link>
        <Navbar />
        <CategoryView />
        <ProblemsView problems={problems} />

      </div>
    )
  }
}

export default Landing;
