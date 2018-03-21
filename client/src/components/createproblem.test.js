import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Dropzone = require('react-dropzone');

configure({ adapter: new Adapter() });

//components
import FixButton from './fixButton.jsx';
import CreateProblemModal from './CreateProblemModal.jsx';

describe('<FixButton />', () => {
  it('should render', () => {
    const wrapper = shallow(<FixButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should toggle modal state when clicked', () => {
    const wrapper = shallow(<FixButton />);
    const button = wrapper.find('button').at(0);

    button.simulate('click');
    expect(wrapper.state().modalOpen).toEqual(true);
  });

  it('should close the modal when the x button is clicked', () => {
    const handleClose = jest.fn();
    const wrapper = shallow(<CreateProblemModal closeMainModal={handleClose} />);
    const button = wrapper.find('button').at(0);

    button.simulate('click');
    expect(handleClose).toBeCalled();
  });

  it('should allow users to type data', () => {
    const wrapper = mount(<CreateProblemModal />);
    const problemNameInput = wrapper.find('input').at(0);
    const cityInput = wrapper.find('input').at(1);
    const problemDescriptionInput = wrapper.find('textarea').at(0);

    problemNameInput.simulate('change', {target: { value: 'iPhone Screen Fix'}});
    expect(wrapper.state().name).toEqual('iPhone Screen Fix');

    cityInput.simulate('change', { target: { value: 'San Diego'}});
    expect(wrapper.state().city).toEqual('San Diego');

    problemDescriptionInput.simulate('change', { target: { value: 'Can someone fix my broken screen please?' }});
    expect(wrapper.state().description).toEqual('Can someone fix my broken screen please?');
  });
//Not sure how I want to test the onDrop.  Did a few things and nothing seemed to work
  // it('should call function to send file onDrop', () => {
  //   const fileContents = "file contents";
  //   const file = new Blob([fileContents], { type: 'image/png' });
  //   const handleDrop = jest.fn();
  //   const wrapper = mount(<CreateProblemModal handleDrop={handleDrop} />);
  //   console.log(wrapper);
  //   const dropzone = wrapper.find(Dropzone).at(0);
    
  //   dropzone.simulate('drop', { dataTransfer: { files: [file]}});
  //   expect(handleDrop).toBeCalled();
  // });

  it('should function to send form onClick', () => {
    const handleClick = jest.fn();
    const handleClose = jest.fn();
    const wrapper = mount(<CreateProblemModal closeMainModal={handleClick}/>);
    wrapper.find('[type="submit"]').at(0).simulate('click');

    // button.simulate('click');
    expect(handleClick).toBeCalled();
  });
})