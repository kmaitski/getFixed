import React from 'react';
//import Listing from './listing.jsx';

class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filters: props.filters,
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.filters.map((filter, index) => <p className="ui red segment" key={`filter${index}`}>{filter.name}</p>)}
        </div>
      </div>
    )
  }
}

export default SideBar;