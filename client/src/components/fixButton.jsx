import React from 'react';
import CreateProblemModal from './CreateProblemModal.jsx'

// import { graphql } from 'react-apollo'; // for wrapping component with apollo client ??
// import gql from 'graph-ql-tag'; // for constructing query

class FixButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  // const _createListing = async () => {
  //   // TODO
  // }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({modalOpen: true})}>Fix My Stuff</button>
        {this.state.modalOpen && <CreateProblemModal />}
      </div>
    );
  }
}

// const POST_MUTATION; // graphQL query

export default FixButton;

// export default graphql(POST_MUTATION, {
//   name: 'postMutation'
// }) // for apollo