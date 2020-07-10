import React from 'react';
import ContactList from '../ContactList/ContactList';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions/contacts';
import './Contacts.css';

function Contacts({ modalVisible, openModal }) {
	return (
		<div className="page contacts__page">
			<h1 className="title main__title">Contacts page</h1>
			<div className="contacts__container container">
				<ContactList />
				<button className="btn btn__add" onClick={() => openModal()}>Add New Contact</button>
				{modalVisible ? <Modal /> : null}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		modalVisible: !!state.contacts.formItem,
	};
}

const mapDispatchToProps = {
	openModal: openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
