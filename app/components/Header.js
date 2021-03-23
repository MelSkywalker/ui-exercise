import React from 'react';
import GmailIcon from './svg/GmailIcon';
import MenuIcon from './svg/MenuIcon';

import './header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="left-container">
				<MenuIcon />
				<GmailIcon />
				<h1 className="title">Gmail</h1>
			</div>
			<div className="right-container">
			<div className="circle">
				<p className="first-letter">M</p>
			</div>
			</div>
		</div>
	)
}

export default Header;
