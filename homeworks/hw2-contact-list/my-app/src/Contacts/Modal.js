import React from 'react';
import './Modal.css';

const inputClassName = 'input__form';
const inputClassNameInValid = inputClassName + ' invalid';
const buttonClassName = 'btn btn__form';
const buttonClassNameDisabled = buttonClassName + ' disabled';

export default class Modal extends React.Component {
	state = {
		contact: { id: '', name: '', surname: '', phone: '' },
		nameClassName: inputClassName,
		surnameClassName: inputClassName,
		phoneClassName: inputClassName,
		buttonClassName: buttonClassNameDisabled
	}

	onFormSubmit = (e) => {
		e.preventDefault();
    if (this.validation()) {
      this.props.saveContact({
				id: this.state.id,
				name: this.state.name,
				surname: this.state.surname,
				phone: this.state.phone,
				class: 'contact animated'
			});

      this.closeModal();
    }
	};

	validation() {
		let valid = true;

		if (!this.validateAllInputs()) {
			valid = false;
			this.disabledButton();
		} else {
			this.enabledButton();
		}

		return valid;
	}

	validateAllInputs = () => {
		if (!this.state.name || !this.state.surname || !this.state.phone) {
			return false;
		}

    return true;
	}

	validateName = () => {
		if (!this.state.name) {
			this.setState({
				nameClassName: inputClassNameInValid
			});
		}
	}

	validateSurname = () => {
		if (!this.state.surname) {
			this.setState({
				surnameClassName: inputClassNameInValid
			});
		}
	}
	
	validatePhone = () => {
		if (!this.state.phone) {
			this.setState({
				phoneClassName: inputClassNameInValid
			});
		}
	}

	disabledButton() {
		this.setState({
			buttonClassName: buttonClassNameDisabled
		});
	}

	enabledButton() {
		this.setState({
			buttonClassName: buttonClassName
		});
	}

	closeModal() {
		this.props.handleModal();
	}

	onNameInputFocus = () => {
		this.setState({
			nameClassName: inputClassName
		});
	}

	onSurnameInputFocus = () => {
		this.setState({
			surnameClassName: inputClassName
		});
	}

	onPhoneInputFocus = () => {
		this.setState({
			phoneClassName: inputClassName
		});
	}

	onNameInputChange = (e) => {
		this.setState({ 
			name: e.target.value,
		});
		this.validation();
	}

	onSurnameInputChange = (e) => {
		this.setState({ 
			surname: e.target.value,
		});
		this.validation();
	}

	onPhoneInputChange = (e) => {
		this.setState({ 
			phone: e.target.value,
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
						className={this.state.nameClassName}
						type="text"
						name="name"
						placeholder="Name"
						defaultValue={this.state.name}
						onChange={this.onNameInputChange}
						onFocus={this.onNameInputFocus}
						onBlur={this.validateName}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
					<input
						autoComplete="off"
						className={this.state.surnameClassName}
						type="text"
						name="surname"
						placeholder="Surname"
						defaultValue={this.state.surname}
						onChange={this.onSurnameInputChange}
						onFocus={this.onSurnameInputFocus}
						onBlur={this.validateSurname}
					/>
					<input
						autoComplete="off"
						className={this.state.phoneClassName}
						type="text"
						name="phone"
						placeholder="Phone"
						defaultValue={this.state.phone}
						onChange={this.onPhoneInputChange}
						onFocus={this.onPhoneInputFocus}
						onBlur={this.validatePhone}
					/>
					<div className="buttons__block">
						<button
							className={this.state.buttonClassName}
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