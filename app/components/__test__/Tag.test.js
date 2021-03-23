import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../Tag';

describe('components | Tag', () => {
	it('it renders the component', () => {
		const component = shallow(<Tag />);
		expect(component).toMatchSnapshot();
	});
});
