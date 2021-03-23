import React from 'react';
import { shallow } from 'enzyme';

import MainPage from '../MainPage';

describe('pages | MainPage', () => {
	it('it renders the component', () => {
		const component = shallow(<MainPage />);
		expect(component).toMatchSnapshot();
	});
});
