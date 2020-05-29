import React from 'react';
import './ContactList.css';
import ContactListItem from './ContactListItem';

const titlesClassName = 'titles';
const titlesClassNameFixed = titlesClassName + ' fixed';
const contactsClassName = 'contacts';
const contactsClassNameCorrect = contactsClassName + ' correct';

export default class ContactList extends React.Component {
	state = {
		titlesClassName: titlesClassName,
		contactsClassName: contactsClassName
	}
	
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
			this.setState({
				titlesClassName: titlesClassNameFixed,
				contactsClassName: contactsClassNameCorrect
			});
		} else {
			this.setState({
				titlesClassName: titlesClassName,
				contactsClassName: contactsClassName
			});
		}
	}
	 
	render() {
		const { contacts, onDelete, onEdit } = this.props;
		return (
			<div className="contact__list container">
				<div 
					className={this.state.titlesClassName} 
					onScroll={this.handleScroll}
				>
					<h2 className="title">Name</h2>
					<h2 className="title">Surname</h2>
					<h2 className="title">Phone</h2>
					<h2 className="title">Actions</h2>
				</div>
				<div className={this.state.contactsClassName}>
					{contacts.map((item) => (
						<ContactListItem
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