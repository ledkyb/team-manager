import React from 'react';

import './BlackBorderButton.scss';

const BlackBorderButton = ({ onClick, btnText }) => {
	return (
		<div className="black-border-button-container">
			<button onClick={onClick}>{btnText}</button>
		</div>
	);
};

export default BlackBorderButton;