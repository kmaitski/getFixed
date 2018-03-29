import React from 'react';
import Problem from './problem.jsx';
import { Card } from 'semantic-ui-react';

const ProblemsView = (props) => (
  <Query
    query={query}
    variables={props.category}
  >
    {({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p>; }
      if (error) { return <p>Error :(</p>; }
      return (
        <div>
          <Card.Group className="ui cards">
            {problems.map((problem, index) => {
              return <Problem
                      key={index}
                      problem={problem}
                      userId={problem.user_id}
                      index={index} 
                    />
            })}
          </Card.Group>
        </div>
      )
    }}
  </Query>

  )

export default ProblemsView;