import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { emailSelector } from '../redux/selectors';
import ActionsBar from './ActionsBar';
import EmailItem from './EmailItem';

import './emailList.scss';

const EmailList = () => {
	const { emailList } = useSelector(emailSelector, shallowEqual);

	return (
		<div className="email-list">
			<ActionsBar />
			{emailList.map(email => (
				<EmailItem
					key={email.id}
					content={email}
				/>
			))}
		</div>
	)
};

export default EmailList;