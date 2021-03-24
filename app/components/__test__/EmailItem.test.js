import React from 'react';
import { shallow } from 'enzyme';

import EmailItem from '../EmailItem';

describe('components | EmailItem', () => {
	it('it renders component', () => {
		const props = {
			content: {
				subject: "hello",
				sender: "someone@fakemail.com",
				body: "Just wanted to say hello Just wanted to say hello Just wanted to say hello Just wanted to say hello.",
				date: "2017-03-05T10:25:43.511Z",
			}
		};

		const component = shallow(<EmailItem {...props} />);
		expect(component).toMatchSnapshot();
	})
})