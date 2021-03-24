import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';

import EmailItem from '../EmailItem';

describe('components | EmailItem', () => {
	const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
	const mockDispatch = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatch);

	beforeEach(() => {
		useDispatchSpy.mockClear();
	});

	const props = {
		content: {
			id: "1",
			subject: "hello",
			sender: "someone@fakemail.com",
			body: "Just wanted to say hello Just wanted to say hello Just wanted to say hello Just wanted to say hello.",
			date: "2017-03-05T10:25:43.511Z"
		}
	};

	it('it renders component', () => {
		const component = shallow(<EmailItem {...props} />);
		expect(component).toMatchSnapshot();

		props.content.tags = ['testTag', 'anotherTestTag'];
		component.setProps({...props})
		component.update();
		expect(component.find('.email-tag')).toHaveLength(2);
	});

	it('handles checkbox on change', () => {
		const component = shallow(<EmailItem {...props} />);
		const checkbox = component.find('input');
		const event = { target: {name: 'checkbox1' } };
		checkbox.simulate('change', event);
		expect(mockDispatch).toHaveBeenCalled();
	});
});
