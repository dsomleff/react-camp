import React from 'react';

/**
 * Single Option Functional Component
 */
const Option = (props) => {
	return (
		<div>
			{ props.optionText }
			<button
				onClick={ () => {
					props.handleDeleteOption(props.optionText);
				} }
			>
				Remove
			</button>
		</div>
	);
};

export default Option;
