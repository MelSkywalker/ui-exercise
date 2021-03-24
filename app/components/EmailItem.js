import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SELECT_EMAIL } from '../redux/reducers';
import dateFormatter from '../utils/date';
import messageFormatter from '../utils/text';
import ImportantIcon from './svg/ImportantIcon';

import './emailItem.scss';

const EmailItem = ({ content }) => {
	const { date, sender, subject, body, tags, id } = content;
	const formattedDate = dateFormatter(date);

	const [selectedItem, setSelectedItems] = useState({});
	const dispatch = useDispatch();

	const handleCheckboxChange = (e) => {
		setSelectedItems({ [e.target.name]: e.target.checked });
		dispatch({
			type: SELECT_EMAIL,
			payload: {
				selectedItemId: id,
				selectedItemStatus: selectedItem
			}
		});
	};

	return (
		<div className="email-item">
			<input
				type="checkbox"
				name={`checkbox${id}`}
				checked={selectedItem[id]}
				onChange={handleCheckboxChange}
				className="msg-checkbox item-element"
			/>
			<button>
				<ImportantIcon className="item-element" />
			</button>
			<p className="sender item-element">{sender}</p>
			<p className="date item-element">{formattedDate}</p>
			<div className="message item-element">
				<span className="subject">{`${subject} - `}</span>
				<span className="message-body">{messageFormatter(body)}</span>
			</div>
			<div className="email-tags item-element">
				{tags && tags.map(tag => (
					<span key={tag} className="email-tag">{tag}</span>
				))}
			</div>
		</div>
	)
};

export default EmailItem;