import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SEND_MESSAGE = gql`
  mutation CreateMessage($id: String!, $text: String!) {
    addMessage(id: $id, text: $text) {
      messages
      id
    }
  }
`;

const ChatInput = ({ problemId }) => {
  let input;

  return (
    <Mutation ignoreResults mutation={SEND_MESSAGE} variables={{ problemId }}>
      {(addMessage, { data }) => (
        <div>
          <input
            type="text"
            ref={node => {
              input = node;
            }}
          />
          <button
            onClick={() => {
              addMessage({ variables: { id: problemId, text: input.value } });
              input.value = '';
            }}
          >
            SEND
          </button>
        </div>
      )}
    </Mutation>
  );
};
export default ChatInput;
