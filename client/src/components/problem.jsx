import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Textfit } from 'react-textfit';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

const Problem = ({ userId, problem }) => (
  <Query
    query={gql`
      query SingleUserQuery($userId: String!) {
        user(id: $userId) {
          username
        }
      }
    `}
    variables={{ userId }}
  >
    {({ loading, error, data }) => {
      console.log(data);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let color = colors[Math.round(Math.random() * 13)];

      return (
        <div class="card" style={{ paddingBottom: '1%', paddingTop: '1%' }}>
          <Card color={color}>
            <Link to={`/singleProblemPage/${problem.id}/${data.user.username}`}>
              <div class="image">
                <Image src={problem.image} />
              </div>
            </Link>
            <Card.Content>
              <Card.Header>
                <Link
                  to={`/singleProblemPage/${problem.id}/${data.user.username}`}
                >
                  <Textfit mode="multi">{problem.title}</Textfit>
                </Link>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Link to={`/userProfile/${userId}`}>
                <div>
                  <span className={`ui ${color} image label center`}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                    {data.user.username}
                  </span>
                </div>
              </Link>
            </Card.Content>
          </Card>
        </div>
      );
    }}
  </Query>
);

export default Problem;
