import React from 'react';
import ContactList from './ContactList';
import Modal from './Modal';
import './Contacts.css';

export default class Contacts extends React.Component {
	state = {
		contacts: [
			{ id: 1, name: 'Jeff', surname: 'Bezos', phone: '+1-234-567-8901' },
			{ id: 2, name: 'Bill', surname: 'Gates', phone: '+1-234-567-8902' },
			{ id: 3, name: 'Elon', surname: 'Musk', phone: '+1-234-567-8903' },
			{ id: 4, name: 'Mark', surname: 'Zuckerberg', phone: '+1-234-567-8904' },
			{ id: 5, name: 'Larry', surname: 'Page', phone: '+1-234-567-8905' },
			{ id: 6, name: 'Warren', surname: 'Buffett', phone: '+1-234-567-8906' },
			{ id: 7, name: 'Bernard', surname: 'Arnault', phone: '+1-234-567-8907' },
			{ id: 8, name: 'Phil', surname: 'Knight', phone: '+1-234-567-8908' },
			{ id: 9, name: 'Carlos', surname: 'Helu', phone: '+1-234-567-8909' },
			{ id: 10, name: 'Michael', surname: 'Bloomberg', phone: '+1-234-567-8900' }
		],
		modal: false,
		idContact: '',
		nameContact: '',
		surnameContact: '',
		phoneContact: ''
	}
	showModal = () => {
		this.setState({modal: !this.state.modal});
		this.removeAnimated();
  }

	getContact = (contact) => {
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
	}

	updateContact = (contact) => {
    this.setState({
			contacts: this.state.contacts.map(item => (item.id === contact.id ? contact : item)),
			idContact: '',
			nameContact: '',
			surnameContact: '',
			phoneContact: ''
		})
		this.animatedContact(contact.id);
	}

	deleteContact = (id) => {
		this.setState({
			contacts: this.state.contacts.filter((item) => item.id !== id),
		});
	}

	onEdit = (item) => {
		this.showModal();
		this.setState({
			idContact: item.id,
			nameContact: item.name,
			surnameContact: item.surname,
			phoneContact: item.phone
		});
	}
	
	scrollToBottom() {
		const footer = document.querySelector('.footer');
		footer.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'});
	}

	animatedContact(id) {
		const contactUpdate = document.getElementById(id);
		contactUpdate.classList.add('animated');
	}

	removeAnimated() {
		const animated = document.querySelectorAll('.animated');
		for(let i = 0; i < animated.length; i++) {
			setTimeout(() => animated[i].classList.remove('animated'), 2000);
		}
	}

  render() {
    return (
			<>
				<div className="header container">
					<h1 className="title title__main">Contact List</h1>
					<button onClick={this.showModal} className="btn btn__add">Add contact</button>
					{ this.state.modal && 
						<Modal
							handleModal={this.showModal}
							getContact={this.getContact}
							idContact={this.state.idContact}
							nameContact={this.state.nameContact}
							surnameContact={this.state.surnameContact}
							phoneContact={this.state.phoneContact}
							onEdit={this.onEdit}
						/>
					}
				</div>
				<ContactList
					contacts={this.state.contacts}
					onDelete={this.deleteContact}
					onEdit={this.onEdit}
				/>
				<div className="footer container"></div>
			</>
    )
  }
}