import React from 'react';

/**
 * Single Option Functional Component
 */
const Option = (props) => (
	<div className="option">
		<p className="option__text">
			{ props.count }. { props.optionText }
		</p>

		<button
			className="button button--link"
			onClick={() => {
				props.handleDeleteOption(props.optionText);
			}}
		>
			Remove
		</button>
	</div>
);

export default Option;
