import React from 'react';
import { Card } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Problem from './problem.jsx';

const ProblemsView = (props) => {
  const query = gql`
    query nearByListings($longitude: Float, $latitude: Float, $radius: Int, $category: String) {
      nearByListings(longitude: $longitude, latitude: $latitude, radius: $radius, category: $category) {
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
        longitude: props.coords.longitude,
        latitude: props.coords.latitude,
        radius: props.distance,
        category: props.category,
        }}
    >
      {({ loading, error, data }) => {
        if (loading) { return <p>Loading...</p>; }
        if (error) { return <p>Error :(</p>; }
        return (
          <div className="container">
            <Card.Group className="ui cards">
              {data.nearByListings.map((problem, index) => {
                return <Problem
                        key={index}
                        problem={problem}
                        userId={problem.user_id}
                        index={index}
                      />; })}
            </Card.Group>
          </div>
        );
      }}
    </Query>
  );
};

export default ProblemsView;
