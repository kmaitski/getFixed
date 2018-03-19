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
      <div className="ui cards">
        <div className="header">
          <h4>Listings</h4>
        </div>
        {this.state.problems.map((problem, index) => <Problem key={problem.id} problem={problem} index={index} />)}
      </div>
    )
  }
}

export default ProblemsView;