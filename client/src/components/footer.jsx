import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const Footer = () => (
  <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="three wide column">
          <h4 className="ui inverted header">About us</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Our Team</a>
            <a href="#" className="item">Office Hours</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Legal</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Our legal team</a>
            <a href="#" className="item">user agreement</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">FAQs</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Help</a>
            <a href="#" className="item">Chat Bot</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">Get Fixed</h4>
          <p>Sometimes an answer is a picture away.</p>
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="#">Site Map</a>
        <a className="item" href="#">Contact Us</a>
        <a className="item" href="#">Terms and Conditions</a>
        <a className="item" href="#">Privacy Policy</a>
      </div>
    </div>
  </div>
)

export default Footer
