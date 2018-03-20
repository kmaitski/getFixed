import React from 'react';

const Problem = (props) => {

  var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
  var index = Math.round(Math.random()*13);
  var color = colors[index];

  return (
    <div className={`ui very raised ${color} card`}>
      <img className="ui centered medium image" src={props.problem.image} />
      <div className="content">
        <a className="header problemTitle">{props.problem.title}</a>
        <p className="problemDesc">{props.problem.description}</p>
      </div>
      <div>
      <a className={`ui ${color} image label`}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"/>
        {props.problem.owner}
        <div className="detail">⭐️⭐️⭐️⭐️⭐️</div>
      </a>
      </div>
    </div>
  )
}

export default Problem;