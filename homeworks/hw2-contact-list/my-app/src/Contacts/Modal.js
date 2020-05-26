import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
	state = {
		nameValueForm: '',
		surnameValueForm: '',
		phoneValueForm: ''
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		if (this.validation()) {
			this.props.onAddNewContact({
				name: this.state.nameValueForm,
				surname: this.state.surnameValueForm,
				phone: this.state.phoneValueForm
			});
			this.closeForm();
		}
	};

	validation() {
		const inputContact = document.querySelectorAll('.input__form');
		const buttonAdd = document.querySelector('.btn__form-add');

		let valid = true;

    for (let i = 0; i < inputContact.length; i++) {
			if (!this.validate(inputContact[i].value)) {
				this.makeInvalid(inputContact[i]);
				this.disabledButton(buttonAdd);
				valid = false;
			} else {
				this.enabledButton(buttonAdd);
				valid = true;
			}
		}
		return valid;
	}

	validate(value) {
    return !!value.trim();
	}

	disabledButton(e) {
		e.classList.add('disabled');
	}
	enabledButton(e) {
		e.classList.remove('disabled');
	}

	makeInvalid(e) {
    e.classList.add('invalid');
	}
	makeValid(e) {
    e.classList.remove('invalid');
	}

	onInputFocus = (e) => {
		this.makeValid(e.target);
	}

	onInputBlur = (e) => {
    if (!this.validate(e.target.value)) {
			this.makeInvalid(e.target);
    }
	}

	closeForm() {
		this.props.handleModal();
	}

	onNameInputChange = (e) => {
		this.setState({ 
			nameValueForm: e.target.value
		});
		this.validation();
	}

	onSurnameInputChange = (e) => {
		this.setState({ 
			surnameValueForm: e.target.value
		});
		this.validation();
	}

	onPhoneInputChange = (e) => {
		this.setState({ 
			phoneValueForm: e.target.value
		});
		this.validation();
	}

	render() {
		return (
			<div className="modal">
				<form className="contact__form" onSubmit={this.onFormSubmit}>
					<span className="close" onClick={this.props.handleModal}></span>
					<h3 className="title title__form">Contact Form</h3>
					<input
							autoFocus={true}
							autoComplete="off"
							className="input__form"
							type="text"
							name="name"
							placeholder="Name"
							value={this.state.nameValueForm}
							onChange={this.onNameInputChange}
							onFocus={this.onInputFocus}
							onBlur={this.onInputBlur}
					/>
					<input
							autoComplete="off"
							className="input__form"
							type="text"
							name="surname"
							placeholder="Surname"
							value={this.state.surnameValueForm}
							onChange={this.onSurnameInputChange}
							onFocus={this.onInputFocus}
							onBlur={this.onInputBlur}
					/>
					<input
							autoComplete="off"
							className="input__form"
							type="text"
							name="phone"
							placeholder="Phone"
							value={this.state.phoneValueForm}
							onChange={this.onPhoneInputChange}
							onFocus={this.onInputFocus}
							onBlur={this.onInputBlur}
					/>
					<div className="buttons__block">
						<button
							className="btn btn__form btn__form-add disabled"
							type="submit"
						>Add Contact
						</button>
						<button
							className="btn btn__form"
							type="button"
							onClick={this.props.handleModal}
						>Cancel
						</button>
					</div>
				</form>
			</div>
		);
	}
}