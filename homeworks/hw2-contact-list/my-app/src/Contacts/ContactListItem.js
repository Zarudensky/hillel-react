import React from 'react';
import './ContactListItem.css';

export default class ContactListItem extends React.Component {
	onEditClick = (e) => {
		e.stopPropagation();
		this.props.onEdit(this.props.item);
	}

	onDeleteClick = (e) => {
		e.stopPropagation();
		this.props.onDelete(this.props.item.id);
	}

	render() {
		const { item } = this.props;
		return (
			<div className={item.class}>
				<div className="contact__block contact__name">
					{item.name}
				</div>
				<div className="contact__block contact__surname">
					{item.surname}
				</div>
				<div className="contact__block contact__phone">
					{item.phone}
				</div>
				<div className="contact__block contact__actions">
					<button className="btn btn__edit" onClick={this.onEditClick}>
						Edit
					</button>
					<button className="btn btn__delete" onClick={this.onDeleteClick}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}