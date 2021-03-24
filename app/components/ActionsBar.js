import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_MESSAGE } from '../redux/reducers';
import ImportantIcon from './svg/ImportantIcon';
import TrashIcon from './svg/TrashIcon';

import './actionsBar.scss';

const ActionsBar = () => {
	const dispatch = useDispatch();

	const handleRemoveItems = (e) => {
		console.log('deleting...');
		dispatch({
			type: DELETE_MESSAGE
		})
	};
	return (
		<div className="actions-bar">
			<input type="checkbox" className="select-all" />
			<button>
				<ImportantIcon />
			</button>
			<button className="delete-button" onClick={handleRemoveItems}>
				<TrashIcon />
			</button>
		</div>
	)
};

export default ActionsBar;
