import React from 'react';
import { shallow } from 'enzyme';

import MainPage from '../MainPage';

describe('pages | MainPage', () => {
	it('it renders the component with data', () => {
		const component = shallow(<MainPage status={'loaded'} />);
		expect(component).toMatchSnapshot();
	});
	it('it renders the component without data', () => {
		const component = shallow(<MainPage status={'loading'} />);
		expect(component).toMatchSnapshot();
	});
});
