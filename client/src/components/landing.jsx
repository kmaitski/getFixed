import React from 'react';
import axios from 'axios';
import Navbar2 from './navBar2.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Footer from './footer.jsx';
import DistanceSlideBar from './DistanceSlideBar.jsx';
import FixButton from './fixButton.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      modalOpen: false,
      distance: 200,
      buttonClicked: false,
    };
    this.geoLocationSuccess = this.geoLocationSuccess.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.geoLocationError = this.geoLocationError.bind(this);
    this.getUsersLocation = this.getUsersLocation.bind(this);
  }

  geoLocationSuccess(pos) {
    const crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  geoLocationError(error) {
    console.log('timeout', error);
    // const retVal = confirm('Geolocation timed out! Try again?');
    // if (retVal === true) {
    //   this.getUsersLocation();
    // }
    axios.get('/ip')
      .then(response => console.log(response))
  }

  getUsersLocation() {
    this.setState({ buttonClicked: true });
    const options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: Infinity,
    };
    // console.log(1);
    if (navigator.geolocation) {
      navigator
        .geolocation
        .getCurrentPosition(this.geoLocationSuccess, this.geoLocationError, options);
    }
  }

  handleChange(miles) {
    this.setState({ distance: miles });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar2
            isLoggedIn={this.props.isLoggedIn}
            onLogout={this.props.onLogout}
            user={this.props.user}
          />


          {/*<Navbar
            isLoggedIn={this.props.isLoggedIn}
            onLogout={this.props.onLogout}
            user={this.props.user}
            />*/}
        </div>
        <div className="ui hidden divider"></div>
        <div className="ui grid container">
          <div
            className="fixed-top"
            style={{ padding:" 230px 0px 180px 0px", width:"12vw" }}
          >
            <CategoryView history={history} />
            <DistanceSlideBar />
          </div>
          <div
            className="sixteen wide column"
            style={{ padding:" 35px 0px 0px 120px" }}
          >
            {/* {
            !this.state.buttonClicked && */}
            <button
              onClick={this.getUsersLocation}
              style={{ marginBottom: '1%' }}
            >
              Click Here To Find Problems Near You!
            </button>
            {/* } */}
            <ProblemsView
              category={this.props.match.params.category}
              coords={{ latitude: this.state.latitude, longitude: this.state.longitude }}
              distance={this.state.distance}
            />
          </div>
        </div>
        <div className="fixed-bottom" style={{padding:" 70px 0px 140px 0px" }}>
           <FixButton />
        </div>
          <div className="ui hidden divider"></div>
          <Footer />
        <br />
      </div>
    );
  }
}

export default Landing;
