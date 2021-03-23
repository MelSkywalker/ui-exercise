import React from 'react';

import './tag.scss';

const Tag = ({tagName}) => {
	return(
		<button className="tag">
			<p>{tagName}</p>
		</button>
	);
}

export default Tag;
