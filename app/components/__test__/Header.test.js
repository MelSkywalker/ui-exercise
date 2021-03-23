import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('components | Header', () => {
	it('it renders the component', () => {
		const component = shallow(<Header />);
		expect(component).toMatchSnapshot();
	});
});
