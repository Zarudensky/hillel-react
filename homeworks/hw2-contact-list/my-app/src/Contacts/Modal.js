import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
	state = {
		id: '',
		name: '',
		surname: '',
		phone: ''
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		if (this.validation()) {
			this.props.getContact({
				id: this.state.id,
				name: this.state.name,
				surname: this.state.surname,
				phone: this.state.phone
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
			name: e.target.value
		});
		this.validation();
	}

	onSurnameInputChange = (e) => {
		this.setState({ 
			surname: e.target.value
		});
		this.validation();
	}

	onPhoneInputChange = (e) => {
		this.setState({ 
			phone: e.target.value
		});
		this.validation();
	}

	onEditContact = () => {
		this.setState({ 
			id: this.props.idContact,
			name: this.props.nameContact,
			surname: this.props.surnameContact,
			phone: this.props.phoneContact
		});
	}
	
	componentDidMount() {
		this.onEditContact();
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
						value={this.state.name}
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
						value={this.state.surname}
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
						value={this.state.phone}
						onChange={this.onPhoneInputChange}
						onFocus={this.onInputFocus}
						onBlur={this.onInputBlur}
					/>
					<div className="buttons__block">
						<button
							className="btn btn__form btn__form-add disabled"
							type="submit"
						>OK
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