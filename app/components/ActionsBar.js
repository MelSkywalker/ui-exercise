import React from 'react';
import ImportantIcon from './svg/ImportantIcon';
import TrashIcon from './svg/TrashIcon';

import './actionsBar.scss';

const ActionsBar = () => {
	return (
		<div className="actions-bar">
			<input type="checkbox" className="select-all" />
			<button>
				<ImportantIcon />
			</button>
			<button>
				<TrashIcon />
			</button>
		</div>
	)
};

export default ActionsBar;
