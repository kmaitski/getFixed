import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input type='text'
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>
            SEARCH
          </button>
        </div>
      </div>
    )
  }
}

const LISTING_SEARCH_QUERY;

export default Search;
