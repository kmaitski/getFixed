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
        <div className="ui visible left sidebar">
          {this.state.filters.map((filter, index) => <a className="filter" href={filter.name} key={`filter${index}`} />)}
        </div>
      </div>
    )
  }
}

export default SideBar;