import React from 'react';
import { shallow } from 'enzyme';

import EmailItem from '../EmailItem';

describe('components | EmailItem', () => {
	it('it renders component', () => {
		const props = {
			content: {
				subject: "hello"
			}
		};

		const component = shallow(<EmailItem {...props} />);
		expect(component).toMatchSnapshot();
	})
})