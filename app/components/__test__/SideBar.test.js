import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import { initialState } from '../../redux/reducers';

import SideBar from '../SideBar';

describe('components | SideBar', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
	const mockDispatch = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatch);

	const mockStore = {
		...initialState,
		tagList: ['work', 'travel'],
		messageCount: 3
	};

	beforeEach(() => {
		useSelectorMock.mockClear();
		useDispatchSpy.mockClear();
	});

	it('renders the component', () => {
		useSelectorMock.mockReturnValue(mockStore);
		const component = shallow(<SideBar />);
		expect(component).toMatchSnapshot();
	});

	it('handles click on inbox button', () => {
		useSelectorMock.mockReturnValue(mockStore);
		const component = shallow(<SideBar />);
		component.find('.inbox-button').simulate('click');
		expect(mockDispatch).toHaveBeenCalled();
	});
	it('handles click on tag button', () => {
		useSelectorMock.mockReturnValue(mockStore);
		const component = shallow(<SideBar />);
		console.log(component.find('.tags-container').find('Tag').first().dive().find('button'));
		component.find('.tags-container').find('Tag').first().dive().find('button').simulate('click');
		expect(mockDispatch).toHaveBeenCalled();
	});
});
