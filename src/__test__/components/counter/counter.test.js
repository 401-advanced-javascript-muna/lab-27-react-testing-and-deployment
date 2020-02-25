import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter/counter.js';
// For Up and Down events
// Assert state changes properly
// Assert that state is being transferred to the DOM

describe('<Counter />', () => {
  it('exists at the start of app', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });
  it('The state start 0', ()=> {
    let app = mount(<Counter />);
    // let buttonUp = app.find('.classes');
    // buttonUp.simulate('click');
    expect(app.state('count')).toEqual(0);
  });

  it('changes the state on click - ', ()=> {
    let app = mount(<Counter />);
    let buttonDown = app.find('.down');
    buttonDown.simulate('click');
    expect(app.state('count')).toEqual(-1);
  });
  it('changes the state on click +', ()=> {
    let app = mount(<Counter />);
    let buttonUp = app.find('.up');
    buttonUp.simulate('click');
    expect(app.state('count')).toEqual(1);
  });


  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});