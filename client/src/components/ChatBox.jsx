import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ChatInput from './ChatInput.jsx';

export class ChatBox extends Component {
  componentWillMount() {
    this.props.subscribeToNewMessages();
  }

  render() {
    let messages = [];
    if (this.props.data && this.props.data.problemMessages && this.props.data.problemMessages.messages) {
      messages = this.props.data.problemMessages.messages;
    }
    return (
      <div style={{"margin":5, "padding":7}}>
        <div>
          {messages.map((elem, index) => (
            <div className="ui card" style={{"padding":7}}><h5 key={index}>{elem}</h5></div>
          ))}
        </div>
        <ChatInput problemId={this.props.problemId} />
      </div>
    )
  }
}

export default ChatBox;