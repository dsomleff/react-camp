import React from 'react';

/**
 * Form Component
 */
export default class AddOption extends React.Component {
	state = {
		error: undefined
	};

	handleAddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({
			error // this is equal next error: error
		}));

		if (!error) {
			e.target.elements.option.value = ''; // clean input field
		}
	}

	render() {
		return (
			<div>
				<form
					className="add-option"
					onSubmit={ this.handleAddOption }
				>
					<input
						type="text"
						name="option"
						className="add-option__input"
					/>

					<button className="button">Add Option</button>
				</form>

				{ this.state.error && <p className="add-option-error">{ this.state.error }</p> }
			</div>
		);
	}
}
