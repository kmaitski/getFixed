import React from 'react';

const Problem = (props) => {

  return (
    <div className="ui card">
      <img src={props.image}/>
      <div className="content">
        <a className="header problemTitle">{props.title}</a>
        <p className="problemDesc">{props.description}</p>
        <div className="chat">
        </div>
      </div>
    </div>
  )
}

export default Problem;