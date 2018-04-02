import React, { Component } from 'react';

export class ChatBox extends Component {
  componentWillMount() {
    this.props.subscribeToNewMessages();
  }

  render() {
    console.log(this.props.data.problemMessages);
    let messages = [];
    if (this.props.data && this.props.data.problemMessages && this.props.data.problemMessages.messages) {
      messages = this.props.data.problemMessages.messages;
    }
    return (
      <div>
      {messages.length && messages.map((elem, index) => (
        <h5 key={index}>{elem}</h5>
      ))}
      </div>
    )
  }
}

export default ChatBox;