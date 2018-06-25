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
    messageAdded(id: $id) {
      id
      messages
    }
  }
`;

const ChatBoxWithMessages = props => (
  <Query query={MESSAGES_QUERY} variables={{ id: props.id }}>
    {({ subscribeToMore, result, data }) => (
      <ChatBox
        {...result}
        data={data}
        problemId={props.id}
        subscribeToNewMessages={() =>
          subscribeToMore({
            document: MESSAGES_SUBSCRIPTION,
            variables: { id: props.id },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newMessage = subscriptionData.data.messageAdded;
              return Object.assign({}, prev, {
                problemMessages: {
                  id: prev.problemMessages.id,
                  messages: [
                    ...prev.problemMessages.messages,
                    ...newMessage.messages
                  ],
                  __typename: 'Messages'
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
