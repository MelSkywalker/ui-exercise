import React from 'react';
import { shallow } from 'enzyme';

import GmailIcon from '../svg/GmailIcon';
import MenuIcon from '../svg/MenuIcon';
import InboxIcon from '../svg/InboxIcon';
import ImportantIcon from '../svg/ImportantIcon';

describe('components | svg', () => {
	it('renders the GmailIcon component', () => {
		const component = shallow(<GmailIcon />);
		expect(component).toMatchSnapshot();
	});
	it('renders the MenuIcon component', () => {
		const component = shallow(<MenuIcon />);
		expect(component).toMatchSnapshot();
	});
	it('renders the InboxIcon component', () => {
		const component = shallow(<InboxIcon />);
		expect(component).toMatchSnapshot();
	});
	it('renders the ImportantIcon component', () => {
		const component = shallow(<ImportantIcon />);
		expect(component).toMatchSnapshot();
	});
});
