import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';

class SingleProblemPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      problems: [
        {
          id: 123,
          title: 'Broken Watch',
          description: 'Needs new hands and battery',
          image: `http://i43.tinypic.com/9kbebm.jpg`,
          owner: 'Joe'
        },
        {
          id: 124,
          title: 'Antique table needs new leg',
          description: `My grandmother's heirloom table has a broken leg, and we hope someone can help us fix it`,
          image: `https://images.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dw792403f3/images/2562667/2562667_1.jpg?sw=500&sh=500`,
          owner: 'Brandon'
        },
        {
          id: 125,
          title: `My iPhone's screen don't work`,
          description: `Screen's broke`,
          image: `http://www.iphoneinformer.com/wp-content/uploads/2016/05/Get-Your-iPhone-Fixed-With-The-New-iCracked-Kit.jpg`,
          owner: 'Greg'
        },
        {
          id: 126,
          title: `Car doesn't start`,
          description: `I replaced the alternator, but I still can't get the thing to start.`,
          image: `https://cdn.pixabay.com/photo/2017/01/17/18/35/auto-1987642_1280.png`,
          owner: 'Kevin'
        }
      ],
      currentProblem: {},
    };
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    let problem = this.state.problems.filter(function(problem) {
      return problem.id === +id;
    })[0];
    this.setState({currentProblem: problem});
  }

  render() {
    return (
      <div>
        <NavBar />
        <CategoryView />
        <div className="ui hidden divider"></div>
        <div className="ui raised container">
          <div className="content">
            <div className="ui header">{this.state.currentProblem.title}</div>
          </div>
          <a className="ui red ribbon label">{this.state.currentProblem.owner}</a>
          <div className="ui segment">
            <img className="ui large image" src={this.state.currentProblem.image}/>
          </div>
          <div className="content description">
            <h4 className="ui sub header">Problem Description:</h4>
            <p>{this.state.currentProblem.description}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default SingleProblemPage