import React from 'react';
import { Query } from 'react-apollo';
import ChatBox from './ChatBox.jsx';
import gql from 'graphql-tag';

const MESSAGES_QUERY = gql`
  query getMessages($id: String!) {
    problemMessages(id: $id) {
      id
      messages
    }
  }
`;

const MESSAGES_SUBSCRIPTION = gql`
  subscription onMessageAdded($id: String!) {
    commentAdded(id: $id) {
      id
      messages
    }
  }
`;

const ChatBoxWithMessages = (props) => (
  <Query
    query={MESSAGES_QUERY}
    variables={{id: props.id}}
  >
    {({ subscribeToMore, result, data }) => (
      <ChatBox
        {...result}
        data={data}
        subscribeToNewMessages={() =>
          subscribeToMore({
            document: MESSAGES_SUBSCRIPTION,
            variables: { id: props.id },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newMessage = subscriptionData.data.messageAdded;

              return Object.assign({}, prev, {
                entry: {
                  messages: [newMessage, ...prev.entry.messages]
                }
              });
            }
          })
        }
      />
    )}
  </Query>
);

export default ChatBoxWithMessages;