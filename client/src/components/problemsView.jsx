import React from 'react';
import { Card } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Problem from './problem.jsx';

const ProblemsView = (props) => {
  // const { category } = props;
  const query = gql`
    query nearByListings($longitude: Float, $latitude: Float, $radius: Int) {
      nearByListings(longitude: $longitude, latitude: $latitude, radius: $radius) {
        id
        image
        title
        description
        user_id
      }
    }
  `;
  return (
    <Query
      query={query}
      variables={{
        longitude: 121.8379,
        latitude: 37.2113,
        radius: 300,
        }}
    >
      {({ loading, error, data }) => {
        if (loading) { return <p>Loading...</p>; }
        if (error) { return <p>Error :(</p>; }
        console.log(data);
        return (
          <div className="container">
            <Card.Group className="ui cards" itemsPerRow={3}>
              {data.allListings.map((problem, index) => {
                return <Problem
                        key={index}
                        problem={problem}
                        userId={problem.user_id}
                        index={index}
                      />;
              })}
            </Card.Group>
          </div>
        );
      }}
    </Query>
  );
};




export default ProblemsView;
