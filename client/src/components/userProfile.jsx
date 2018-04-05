import React from 'react';
import NavBar from './navBar.jsx';
import CategoryView from './categoryView.jsx';
import axios from 'axios'
import { Card } from 'semantic-ui-react';
import Problem from './problem.jsx';
import NavBar2 from './navBar2.jsx';
// import GoogleMap from './googleMap.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      listings:[]
    };
  }

  componentWillMount() {
    var context = this;
    var user_id =  this.props.location.pathname.split('/')[2];
    console.log(user_id)
    axios.get(`/user/${user_id}`)
      .then(function (response) {
        console.log(response)
        context.setState({currentUser: response.data})
        return axios.get(`/listings/${user_id}`)
      })
      .then((response) => {
        context.setState({listings: response.data})
        })
  }


  render() {
    return (
      <div>
        <NavBar2
          isLoggedIn={this.props.isLoggedIn}
          onLogout={this.props.onLogout}
          user={this.props.user}
        />
        <div class="ui vertical strip segment">
          <div class="ui middle aligned stackable grid container">
            <div class="row">
              <div class="six wide column">
                <img class="ui large bordered round image" src="https://pbs.twimg.com/profile_images/799977947461517312/D0dSS5qF_400x400.jpg"/>
              </div>
              <div class="eight wide right floated column">
                <div style={{paddingLeft: "4%", paddingTop: "2%"}}>
                  <h2>{this.state.currentUser.username}</h2>
                  <div>
                    <div>
                      Stars Image
                    </div>
                    <span>{this.state.currentUser.avg_rating || 'Unrated'} </span>
                    <span>{this.state.currentUser.rating_count || 'No Ratings Yet'}</span>
                  </div>
                  <div>
                    <h4>{this.state.currentUser.phone_number || 'No phone number'}</h4>
                    <span><em>Serving area around {this.state.currentUser.city}, call for availability</em></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui vertical strip segment">
          <h3 class="ui header">Active Listings</h3>
          <div class="container">
            <div class="card-columns">
              {this.state.listings.map((problem, index) => {
                return (
                  <div>
                    <Problem
                      key={index}
                      problem={problem}
                      userId={problem.user_id}
                      index={index}
                    />
                  </div>);
              })}
          </div>
        </div>
        <div class="ui vertical strip segment">
        </div>
      </div>
    </div>
)}

}

export default UserProfile;