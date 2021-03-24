import React from 'react';
import { shallow } from 'enzyme';

import ActionsBar from '../ActionsBar';

describe('components | ActionsBar', () => {
	it('it renders the component', () => {
		const component = shallow(<ActionsBar />);
		expect(component).toMatchSnapshot();
	});
});
