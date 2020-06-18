import React, { Component } from 'react';

import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import contactsService from '../../contactsService';

const EMTY_CONTACT = {
    age: '',
    name: '',
    surname: '',
    phone: '',
};

export default class Contacts extends Component {
    state = {
        selectedContact: this.getEmptyContact(),
        contacts: [],
    };

    componentDidMount() {
        contactsService.get().then(({ data }) => {
            this.setState({ contacts: data });
        });
    }

    getEmptyContact() {
        return { ...EMTY_CONTACT };
    }

    onAddNewBtnClick = () => {
        this.setState({
            selectedContact: this.getEmptyContact(),
        });
    };

    onContactSelect = (contact) => {
        this.setState({
            selectedContact: contact,
        });
    };

    onDelete = (contact) => {
        contactsService.delete(contact.id);
        this.setState({
            contacts: this.state.contacts.filter((el) => el.id !== contact.id),
            selectedContact: this.getEmptyContact(),
        });
    };

    onSave = (contact) => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.createContact(contact);
        }
    };

    createContact(contact) {
        contactsService.post('', contact).then(({ data }) => {
            this.setState({
                contacts: [...this.state.contacts, data],
                selectedContact: data,
            });
        });
    }

    updateContact(contact) {
        contactsService.put(contact.id, contact).then(() => {
            this.setState({
                contacts: this.state.contacts.map((el) =>
                    el.id === contact.id ? contact : el
                ),
                selectedContact: contact,
            });
        });
    }

    render() {
        return (
            <>
                <div className="left-panel">
                    <ContactsList
                        contacts={this.state.contacts}
                        onSelect={this.onContactSelect}
                    ></ContactsList>
                    <button
                        onClick={this.onAddNewBtnClick}
                        className="add-new-contact-btn"
                    >
                        Add new
                    </button>
                </div>
                <div className="right-panel">
                    <ContactForm
                        contact={this.state.selectedContact}
                        onDelete={this.onDelete}
                        onSave={this.onSave}
                    ></ContactForm>
                </div>
            </>
        );
    }
}