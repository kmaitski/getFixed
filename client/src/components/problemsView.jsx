import React from 'react';
import Problem from './problem.jsx';

class ProblemsView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      problems: props.problems
    }
  }

  render() {
    return (
      <div>
        <div className="header"><h4>Listings</h4></div>
        <div className="ui cards">

        {this.state.problems.map((problem, index) => <Problem className="ui card" key={problem.id} problem={problem} index={index} />)}
        </div>
      </div>
    )
  }
}

export default ProblemsView;