import React from 'react';
import './ContactsList.css';

import ContactsListItem from '../ContactsListItem/ContactsListItem';

export default class ContactList extends React.Component {
  render() {
    return (
      <>
        {this.props.contacts.map((contact) => (
          <ContactsListItem
            contact={contact}
            key={contact.id}
            onContactClick={this.props.onContactClick}
          />
        ))}
      </>
    );
  }
}