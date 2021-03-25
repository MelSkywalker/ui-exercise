import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { FILTER_EMAILS } from '../redux/reducers';
import { sideBarSelector } from '../redux/selectors';

import Tag from './Tag';
import InboxIcon from './svg/InboxIcon';
import ImportantIcon from './svg/ImportantIcon';

import './sideBar.scss';

const SideBar = () => {
	const { tagList, messageCount } = useSelector(sideBarSelector, shallowEqual);
	const dispatch = useDispatch();

	const handleFilterItems = (e) => {
		const filterToApply = e ? e.target.name : 'all';
		dispatch({
			type: FILTER_EMAILS,
			payload: {
				filterToApply: filterToApply
			}
		})
	}

	return(
		<div className="side-bar">
			<button className="inbox-button side-button" name="all" onClick={handleFilterItems}>
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
				{tagList.map((tag) => (
					<Tag key={tag} tagName={tag} handleFilterItems={handleFilterItems} />
				))}
			</div>
		</div>
	);
}

export default SideBar;
