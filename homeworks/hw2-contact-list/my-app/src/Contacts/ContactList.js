import React from 'react';
import './ContactList.css';
import Contact from './Contact';

export default class ContactList extends React.Component {
	componentDidMount = () => {
		window.addEventListener('scroll', this.handleOnScroll)
 	}

 	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleOnScroll)
 	}

 	handleOnScroll = () => {
		const windowScroll = window.scrollY;
		const titlesBlock = document.querySelector('.titles');
		const contactsBlock = document.querySelector('.contacts');

		if (windowScroll >= contactsBlock.offsetTop - titlesBlock.offsetHeight) {
			titlesBlock.classList.add('fixed');
			contactsBlock.classList.add('correct');
		} else {
			titlesBlock.classList.remove('fixed');
			contactsBlock.classList.remove('correct');
		}
	}
	 
	render() {
		const { contacts, onDelete, onEdit } = this.props;
		return (
			<div className="contact__list container">
				<div className="titles" onScroll={this.handleScroll}>
					<h2 className="title">Name</h2>
					<h2 className="title">Surname</h2>
					<h2 className="title">Phone</h2>
					<h2 className="title">Actions</h2>
				</div>
				<div className="contacts">
					{contacts.map((item) => (
						<Contact
							key={item.id}
							item={item}
							onDelete={onDelete}
							onEdit={onEdit}
						/>
					))}
				</div>
			</div>
		);
	}
}