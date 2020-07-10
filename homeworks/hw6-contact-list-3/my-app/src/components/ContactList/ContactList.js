import React from 'react';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { connect } from 'react-redux';
import { openModal, deleteContact } from '../../store/actions/contacts';
import './ContactList.css';

function ContactList({ items, onItemDelete, onItemEdit }) {
	return (
		<>
			<div className="titles">
				<h2 className="title">Name</h2>
				<h2 className="title">Surname</h2>
				<h2 className="title">Phone</h2>
				<h2 className="title">Actions</h2>
			</div>
			<div className="contacts">
				{items.map(item => (
					<ContactsListItem
						key={item.id}
						item={item}
						onItemDelete={onItemDelete}
						onItemEdit={onItemEdit}
					/>
				))}
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		items: state.contacts.contacts
	};
}

const mapDispatchToProps = {
	onItemDelete: deleteContact,
	onItemEdit: openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);