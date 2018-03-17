import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const ServicesMapped = (props) => (
  <div>
    {props.services.map((service) => (
      <Link to ={{pathname: '/'}}>
      service
      </Link>
      ))}
  </div>
);


export default ServicesMapped;