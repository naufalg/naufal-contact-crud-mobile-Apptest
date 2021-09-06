import 'react-native';
import React from 'react';
import ContactDetail from '../src/pages/ContactDetail';

import {create, act} from 'react-test-renderer';

it('renders contact detail', () => {
  const page = create(<ContactDetail />);
  expect(page).toMatchSnapshot();
});

// it('edit contact', () => {
//   const mockEditFn = jest.fn();

//   const {getByText} = create(<ContactDetail />);

//   fireEvent.press(getByText('Edit'));

//   expect(mockEditFn).toBeCalledWith({
//     1: {
//       firstName: 'first',
//       lastName: 'last',
//       age: 123,
//       photo: 'photo.com',
//     },
//   });
// });
