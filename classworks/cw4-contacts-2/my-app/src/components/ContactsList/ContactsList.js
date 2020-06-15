import React, { Component } from './node_modules/react';
import './contactsList.css';

import ContactsListItem from '../ContactsListItem/ContactsListItem';

export class ContactsList extends Component {
    render() {
        return (
            <ul className="contacts-list">
                {this.props.contacts.map((contact) => (
                    <ContactsListItem
                        contact={contact}
                        key={contact.id}
                        onSelect={this.props.onSelect}
                    ></ContactsListItem>
                ))}
            </ul>
        );
    }
}

export default ContactsList;