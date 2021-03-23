import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import { initialState } from '../../redux/reducers';

import SideBar from '../SideBar';

describe('components | SideBar', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

	const mockStore = {
		...initialState,
		tagList: ['tag01', 'tag02'],
		messageCount: 3
	};

	beforeEach(() => {
		useSelectorMock.mockClear();
	});

	it('renders the component', () => {
		useSelectorMock.mockReturnValue(mockStore);
		const component = shallow(<SideBar />);
		expect(component).toMatchSnapshot();
	});
});
