import React from 'react';
import Navbar2 from './navBar2.jsx';
import ProblemsView from './problemsView.jsx';
import CategoryView from './categoryView.jsx';
import Footer from './footer.jsx';
import FixButton from './fixButton.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      modalOpen: false
    };
    this.geoLocationSuccess = this.geoLocationSuccess.bind(this);
  }

  geoLocationSuccess(pos) {
    const crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  geoLocationError(error) {
    console.log(`ERROR(${error.code}): ${error.message}`);
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(this.geoLocationSuccess, this.geoLocationError, options);
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
          </div>
          <div
            className="sixteen wide column"
            style={{ padding:" 35px 0px 0px 120px" }}
            <ProblemsView
              category={this.props.match.params.category}
              coords={{ latitude: this.state.latitude, longitude: this.state.longitude }}
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
//top right bottom

export default Landing;
