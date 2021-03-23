import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import { initialState } from '../../redux/reducers';

import EmailList from '../EmailList';

describe('components | EmailList', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

	const mockStore = {
		...initialState,
		emailsById: {
			'1': {
				subject: 'hello!'
			},
			'2': {
				subject: 'hello!!'
			}
		},
		emailsIdArray: ['1', '2']
	};

	beforeEach(() => {
		useSelectorMock.mockClear();
	});

	it('renders the component', () => {
		useSelectorMock.mockReturnValue(mockStore);
		const component = shallow(<EmailList />);
		expect(component).toMatchSnapshot();
	});
});
