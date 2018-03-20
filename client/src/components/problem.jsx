import React from 'react';

const Problem = (props) => {

  return (
    <div className="ui card">
      <img src={props.problem.image}/>
      <div className="content">
        <a className="header problemTitle">{props.problem.title}</a>
        <p className="problemDesc">{props.problem.description}</p>
      </div>
    </div>
  )
}

export default Problem;