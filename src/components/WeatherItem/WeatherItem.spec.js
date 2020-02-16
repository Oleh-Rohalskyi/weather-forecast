import { render, fireEvent, getByTestId, act} from "@testing-library/react-hooks";

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import WeatherItem from './WeatherItem';


describe('src > components > WeatherItem', () => {

  const mockUp = {
    temp:  "36.6",
    feels_like: "42",
    description: "Thunderly", 
    dt_txt: "2020-02-15 12:00:00"
}

  it('renders without crashing', () => {
    
    const wrapper = mount(
        <WeatherItem key={0} props={mockUp} />
    );
    expect(wrapper).toMatchSnapshot();

  });

});


// import React from 'react';
// import {Provider} from 'react-redux';
// import {mount} from 'enzyme';
// import configureStore from 'redux-mock-store';
// import {actionTypes} from '../../features/weather';
// import WeatherList from './WeatherList';

// describe('src > components > Weather', () => {
//   /* Create mock store with count value */
//   const mockStore = configureStore([]);
  
//   /* Add jest mock spy to watch for store.dispatch method. See https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname for more info */
//   jest.spyOn(store, 'dispatch');

//   /* Jest hook which runs before each test, https://jestjs.io/docs/en/api#beforeeachfn-timeout */
//   beforeEach(() => {
//     /* Clear any saved mock data from previous tests, because jest saves calls data for spies and mocks, https://jestjs.io/docs/en/mock-function-api#mockfnmockclear */
//     store.dispatch.mockClear();
//   });

//   it('renders without crashing', () => {
//     /* We can only use enzyme `mount`, no `shallow`, since we are using React hooks, which `shallow` doesn't support */
//     const wrapper = mount(
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );

//     /* Basic snapshot test to make sure, that rendered component matches expected footprint. */
//     expect(wrapper).toMatchSnapshot();

//     /* More precise test for counter value */
//     const countValue = wrapper.find('strong').text(); // here count value is displayed, note the `text()` method, https://airbnb.io/enzyme/docs/api/ReactWrapper/text.html
//     expect(countValue).toBe('6'); // 6 is value we expect, we need to convert Number to String, because Enzyme text() method returns string value
//   });

//   it('dispatches an action on button click', () => {
//     const wrapper = mount(
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );

//     /* Search for the button and make enzyme click on it */
//     wrapper.find('button').simulate('click');

//     /* Check if store.dispatch method was run */
//     expect(store.dispatch).toHaveBeenCalledTimes(1);

//     /* Check if store.dispatch was run with correct action */
//     expect(store.dispatch).toHaveBeenCalledWith({
//       type: actionTypes.INCREMENT_COUNTER,
//     });
    
//   });
// });
