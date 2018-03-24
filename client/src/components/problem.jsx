import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  render() {
    var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
    var index = Math.round(Math.random()*13);
    var color = colors[index];
    var user_id = this.props.userId;
    var username = this.props.data.user ? this.props.data.user.username : 'USER';

    return (
      <div className={`ui very raised ${color} card`}>
        <Link to={`/singleProblemPage/${this.props.problem.id}/${username}`}>
          <img className="ui centered medium image" src={this.props.problem.image} />
        </Link>
        <div className="content">
          <Link to={{pathname:`/singleProblemPage/${this.props.problem.id}`}} className="header problemTitle">{this.props.problem.title}</Link>
          <p className="problemDesc">{this.props.problem.description}</p>
        </div>

        <div>
          <Link to={`/userProfile/${user_id}`}>
            <div>
              <span className={`ui ${color} image label`}>
                <img src="https://www.w3schools.com/howto/img_avatar.png"/>
                {username}
                <div className="detail">⭐️⭐️⭐️⭐️⭐️</div>
              </span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

const SINGLE_USER_QUERY = gql`
  query SingleUserQuery($userId: String!) {
    user(num: $userId) {
      username
    }
  }
`

export default graphql(SINGLE_USER_QUERY, {
  options: ({ userId }) => ({variables: { userId }}),
})(Problem)