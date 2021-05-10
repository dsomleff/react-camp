import React from 'react';

/**
 * <What should I do?> Button Functional Component
 */
const Action = (props) => {
	return (
		<div>
			<button
				onClick={ props.handlePick }
				disabled={ !props.hasOptions }
			>
				What should I do?
			</button>
		</div>
	);
};

export default Action;
