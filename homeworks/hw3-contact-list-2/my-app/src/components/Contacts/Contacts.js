import React from 'react';

import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import contactsService from '../../contactsService';


const EMTY_CONTACT = {
  id: '',
  name: '',
  surname: '',
  phone: ''
};

export default class Contact extends React.Component {
  state = {
		contacts: [],
    selectedContact: this.getEmptyContact(),
  }

  onSelect = (contact) => {
    this.setState({
      selectedContact: contact,
    });
  };

  getEmptyContact() {
    return { ...EMTY_CONTACT };
  }

  onSave = (contact) => {
		if (contact.id) {
			this.updateContact(contact);
		} else {
			this.addContact(contact);
		}
  }
  
  addContact = (contact) => {
    contactsService.addContact(contact).then((newContact) => {
      this.setState({
        contacts: [...this.state.contacts, newContact],
        selectedContact: newContact,
      });
    });
  };

  updateContact = (contact) => {
    contactsService.updateContact(contact).then(() => {
      this.setState({
        contacts: this.state.contacts.map((el) =>
          el.id === contact.id ? contact : el
        ),
        selectedContact: contact,
      });
    });
  }

  onDelete = (contact) => {
    contactsService.deleteContact(contact.id);
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== contact.id),
      selectedContact: this.getEmptyContact(),
    });
  };

  onAddContactClick = () => {
    console.log('onAddContactClick');
    this.setState({
      selectedContact: this.getEmptyContact(),
    });
  }
  
  componentDidMount() {
    contactsService.getContacts().then((contacts) => {
      this.setState({ contacts });
    });
  }

  render() {
    return (
      <>
        <h1 className="title title__main">Contact List 2</h1>
        <div className="contacts__container">
          <div className="contacts">
            <ContactsList
              contacts={this.state.contacts}
              onContactClick={this.onSelect}
            />
            <button className="btn btn__add"
            onClick={this.onAddContactClick}
            >Add contact</button>
          </div>
          <ContactForm
            contact={this.state.selectedContact}
            onDelete={this.onDelete}
            onSave={this.onSave}
          />
        </div>
      </>
    )
  }
}