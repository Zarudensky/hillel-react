import React from 'react';
import { connect } from 'react-redux';
import {
	closeModal,
	changeFormItem,
	saveFormItem,
} from '../../store/actions/contacts';
import './Modal.css';

function Modal({ item, onChange, onSave, onCancel }) {
	function onFormSubmit(e) {
		e.preventDefault();
		onSave(item);
	}
	function onNameInputChange(e) {
		const name = {
			name: e.target.value,
		};
		onChange(name);
	}
	function onSurnameInputChange(e) {
		const surname = {
			surname: e.target.value,
		};
		onChange(surname);
	}
	function onPhoneInputChange(e) {
		const phone = {
			phone: e.target.value,
		};
		onChange(phone);
	}

	return (
		<div className="modal">
			<form className="contact__form" onSubmit={onFormSubmit}>
				<span className="close" onClick={() => onCancel()}></span>
				<h3 className="title title__form">Contact Form</h3>
				<input
					autoFocus={true}
					autoComplete="off"
					className="input__form"
					type="text"
					name="name"
					placeholder="Name"
					value={item.name}
					onChange={onNameInputChange}
				/>
				<input
					autoComplete="off"
					className="input__form"
					type="text"
					name="surname"
					placeholder="Surname"
					value={item.surname}
					onChange={onSurnameInputChange}
				/>
				<input
					autoComplete="off"
					className="input__form"
					type="text"
					name="phone"
					placeholder="Phone"
					value={item.phone}
					onChange={onPhoneInputChange}
				/>
				<div className="buttons__block">
					<button
						className="btn btn__form"
						type="submit"
					>Save
					</button>
					<button
						className="btn btn__form"
						type="button"
						onClick={() => onCancel()}
					>Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		item: state.contacts.formItem,
	};
}

const mapDispatchToProps = {
	onCancel: closeModal,
	onChange: changeFormItem,
	onSave: saveFormItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
