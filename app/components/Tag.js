import React from 'react';
import './tag.scss';

const Tag = ({tagName, handleFilterItems}) => {
	return(
		<button className="tag" onClick={handleFilterItems} name={tagName}>
			{tagName}
		</button>
	);
}

export default Tag;
