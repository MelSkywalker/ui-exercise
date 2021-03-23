import React from 'react';
import { shallowEqual, useSelector } from "react-redux";
import { sideBarSelector } from '../redux/selectors';
import Tag from './Tag';
import InboxIcon from './svg/InboxIcon';
import ImportantIcon from './svg/ImportantIcon';

import './sideBar.scss';

const SideBar = () => {
	const { tagList, messageCount } = useSelector(sideBarSelector, shallowEqual);
	return(
		<div className="side-bar">
			<button className="side-button">
				<InboxIcon className="side-item" />
				<p className="side-item inbox">Inbox</p>
				<span className="message-count">{messageCount}</span>
			</button>
			<button className="side-button">
				<ImportantIcon className="side-item" />
				<p className="side-item">Important</p>
			</button>
			<h3 className="tag-title">Tags:</h3>
			<div className="tags-container">
				{tagList.map(tag => (
					<Tag key={tag} tagName={tag} />
				))}
			</div>
		</div>
	);
}

export default SideBar;
