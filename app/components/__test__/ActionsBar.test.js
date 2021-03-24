import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';

import ActionsBar from '../ActionsBar';

describe('components | ActionsBar', () => {
	const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
	const mockDispatch = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatch);

	beforeEach(() => {
		useDispatchSpy.mockClear();
	});

	it('it renders the component', () => {
		const component = shallow(<ActionsBar />);
		expect(component).toMatchSnapshot();
	});

	it('handles click on delete button', () => {
		const component = shallow(<ActionsBar />);
		component.find('.delete-button').simulate('click');
		expect(mockDispatch).toHaveBeenCalled();
	});
});
