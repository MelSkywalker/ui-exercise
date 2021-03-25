import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../Tag';

describe('components | Tag', () => {
	it('it renders the component', () => {
		const props = { tagName: 'work', handleFilterItems: jest.fn() }
		const component = shallow(<Tag {...props} />);
		expect(component).toMatchSnapshot();
	});
});
