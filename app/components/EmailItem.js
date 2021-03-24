import React from 'react';
import dateFormatter from '../utils/date';
import messageFormatter from '../utils/text';
import ImportantIcon from './svg/ImportantIcon';

import './emailItem.scss';

const EmailItem = ({ content }) => {
	const { date, sender, subject, body, tags } = content;

	const formattedDate = dateFormatter(date);
	return (
		<div className="email-item">
			<input
				type="checkbox"
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