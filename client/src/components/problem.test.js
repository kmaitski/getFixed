import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// components
import Problem from '../components/problem.jsx';

const problem = {
  title: 'Broken Watch',
  description: 'Needs new hands and battery',
}; // sample problem

describe('<Problem />', () => {
  it('should render', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.exists()).toBe(true);
  });
  it ('should contain an image', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('img')).toHaveLength(1);
  });
  it('should render a title', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.problemTitle')).toHaveLength(1);
  });
  it('should render a description of the problem', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.problemDesc')).toHaveLength(1);
  });
  it('should not render a chat section', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.chat')).toHaveLength(0);
  });
});