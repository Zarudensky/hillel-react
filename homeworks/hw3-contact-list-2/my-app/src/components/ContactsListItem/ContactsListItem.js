import React from 'react';
import './ContactsListItem.css';

export default class ContactListItem extends React.Component {
	render() {
    const { contact } = this.props;
		return (
      <div className="contact" onClick={this.props.onContactClick.bind(null, contact)}>
        <div className="contact__block contact__name">
          {contact.name}
        </div>
        <div className="contact__block contact__surname">
          {contact.surname}
        </div>
        <div className="contact__block contact__phone">
          {contact.phone}
        </div>
      </div>
		);
	}
}