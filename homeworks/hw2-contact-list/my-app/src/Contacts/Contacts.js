import React from 'react';
import ContactList from './ContactList';
import Header from './Header';

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
	}

	addNewContact = (newContact) => {
    newContact.id = Date.now();

    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
	}

	deleteContact = (id) => {
		this.setState({
			contacts: this.state.contacts.filter((item) => item.id !== id),
		});
	}
	editContact = (id) => {
		console.log('edit contact: ' + id);
	}
	
  render() {
    return (
			<>
				<Header onAddNewContact={this.addNewContact}/>
				<ContactList
						contacts={this.state.contacts}
						onDelete={this.deleteContact}
						onEdit={this.editContact}
				/>
			</>
    )
  }
}