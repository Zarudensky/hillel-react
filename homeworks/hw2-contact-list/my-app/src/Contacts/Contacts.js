import React from 'react';
import ContactList from './ContactList';
import Modal from './Modal';
import './Contacts.css';

export default class Contacts extends React.Component {
	state = {
		contacts: [
			{ id: 1, name: 'Jeff', surname: 'Bezos', phone: '+1-234-567-8901', class: 'contact' },
			{ id: 2, name: 'Bill', surname: 'Gates', phone: '+1-234-567-8902', class: 'contact' },
			{ id: 3, name: 'Elon', surname: 'Musk', phone: '+1-234-567-8903', class: 'contact' },
			{ id: 4, name: 'Mark', surname: 'Zuckerberg', phone: '+1-234-567-8904', class: 'contact' },
			{ id: 5, name: 'Larry', surname: 'Page', phone: '+1-234-567-8905', class: 'contact' },
			{ id: 6, name: 'Warren', surname: 'Buffett', phone: '+1-234-567-8906', class: 'contact' },
			{ id: 7, name: 'Bernard', surname: 'Arnault', phone: '+1-234-567-8907', class: 'contact' },
			{ id: 8, name: 'Phil', surname: 'Knight', phone: '+1-234-567-8908', class: 'contact' },
			{ id: 9, name: 'Carlos', surname: 'Helu', phone: '+1-234-567-8909', class: 'contact' },
			{ id: 10, name: 'Michael', surname: 'Bloomberg', phone: '+1-234-567-8900', class: 'contact' }
		],
		modal: false,
		editContact: { idContact: '', nameContact: '', surnameContact: '', phoneContact: '' }
	}

	toggleModal = () => {
		this.setState({modal: !this.state.modal});
		this.clearEditContact();
	}

	clearEditContact = () => {
		this.setState({
			idContact: '',
			nameContact: '',
			surnameContact: '',
			phoneContact: ''
		});
	}

	saveContact = (contact) => {
		if (contact.id) {
			this.updateContact(contact);
		} else {
			this.addContact(contact);
		}
	}

	addContact = (contact) => {
    contact.id = Date.now();
    this.setState({
      contacts: [...this.state.contacts, contact]
		})
		this.scrollToBottom();
		this.removeClassAnimated(contact.id);
	}

	updateContact = (contact) => {
    this.setState({
			contacts: this.state.contacts.map(item => (item.id === contact.id ? contact : item))
		});
		this.clearEditContact();
		this.removeClassAnimated(contact.id);
	}

	deleteContact = (id) => {
		this.setState({
			contacts: this.state.contacts.filter((item) => item.id !== id),
		});
	}

	onEdit = (item) => {
		this.toggleModal();
		this.setState({
			idContact: item.id,
			nameContact: item.name,
			surnameContact: item.surname,
			phoneContact: item.phone
		});
	}

	scrollToBottom() {
		this.scrollToFooter.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'});
	}

	removeClassAnimated = (id) => {
		setTimeout(() => 
		this.setState({
			contacts: this.state.contacts.map((item) =>
				item.id !== id ? item : { ...item, class: 'contact' }
			)
		}), 2000)
	}

  render() {
    return (
			<>
				<div className="header container">
					<h1 className="title title__main">Contact List</h1>
					<button onClick={this.toggleModal} className="btn btn__add">Add contact</button>
					{ this.state.modal && 
						<Modal
							handleModal={this.toggleModal}
							saveContact={this.saveContact}
							idContact={this.state.idContact}
							nameContact={this.state.nameContact}
							surnameContact={this.state.surnameContact}
							phoneContact={this.state.phoneContact}
						/>
					}
				</div>
				<ContactList
					contacts={this.state.contacts}
					onDelete={this.deleteContact}
					onEdit={this.onEdit}
				/>
				<div 
					className="footer container" 
					ref={(footer) => this.scrollToFooter=footer}
					>
				</div>
			</>
    )
  }
}