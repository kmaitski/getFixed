import React from 'react';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';
// import GoogleMap from './googleMap.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Joe',
          phoneNumber: "(555) 123-4567",
          averageRating: 5,
          totalRatings: 6,
          city: 'Gatorland'
        },
        {
          id: 2,
          name: 'Brandon',
          phoneNumber: "(555) 555-5555",
          averageRating: 5,
          totalRatings: 3,
          city: 'Portlandia'
        },
        {
          id: 3,
          name: 'Greg',
          phoneNumber: "(444) 444-4444",
          averageRating: 5,
          totalRatings: 10,
          city: 'Denver'
        },
        {
          id: 4,
          name: 'Kevin',
          phoneNumber: "(333) 333-3333",
          averageRating: 3,
          totalRatings: 1,
          city: 'San Jose'
        }
      ],
      currentUser: {}
    };
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    let user = this.state.users.filter(user => {
      return user.id === +id;
    })[0];
    this.setState({ currentUser: user });
  }


  render() {
    return (
      <div>
        <NavBar />
        <CategoryView />
        <div style={{paddingLeft: "4%", paddingTop: "2%"}}>
          <h2>{this.state.currentUser.name}</h2>
          <div>
            <div>
              Stars Image
            </div>
            <span>{this.state.currentUser.averageRating} </span>
            <span>|          {this.state.currentUser.totalRatings} Ratings</span>
          </div>
          <div>
            <h4>{this.state.currentUser.phoneNumber}</h4>
            <span><em>Serving area around {this.state.currentUser.city}, call for availability</em></span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;