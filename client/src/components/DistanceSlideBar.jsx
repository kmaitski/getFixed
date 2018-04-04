import React from 'react';

const DistanceSlideBar = props => (
  <div>
    <select
      class ="ui dropdown"
      onChange={e => props.handleChange(e.target.value)}
    >
      <option value="">Miles</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="80">80</option>
      <option value="160">160</option>
      <option value="320">320</option>
    </select>
  </div>
);

export default DistanceSlideBar;
