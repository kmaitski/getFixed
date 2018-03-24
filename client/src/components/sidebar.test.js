import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// components
import Sidebar from '../components/sidebar.jsx';

const filters = [
  {
    id: 1,
    name: 'In My Area',
  },
  {
    id: 2,
    name: 'Remote Help',
  },
  {
    id: 3,
    name: `Monetary Compensation`,
  }
] // sample problem

describe('<Sidebar />', () => {
  it('should render', () => {
    const wrapper = shallow(<Sidebar filters={filters}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it ('should render all filters in the filters array', () => {
    const filtersCount = filters.length;
    console.log("filterCount: ", filtersCount);
    const wrapper = shallow(<Sidebar filters={filters}/>);
    console.log('wrapper component: ', wrapper);
    expect(wrapper.find('.filter')).toHaveLength(filtersCount);
    console.log("filters counted from wrapper: ", wrapper.find('.filter'));
  });
});