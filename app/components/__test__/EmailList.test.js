import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';

import EmailList from '../EmailList';

describe('components | EmailList', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

	const mockEmailList = {
		emailList: [
			{
				id: "1",
				subject: "hey!",
				tags: ['work', 'travel']
			},
			{
				id: "2",
				subject: "Attention!",
				tags: []
			}
		]
	};

	beforeEach(() => {
		useSelectorMock.mockClear();
	});

	it('renders the component', () => {
		useSelectorMock.mockReturnValue(mockEmailList);
		const component = shallow(<EmailList />);
		expect(component).toMatchSnapshot();
	});
});
