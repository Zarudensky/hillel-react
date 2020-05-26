import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
	onEditClick = (e) => {
		e.stopPropagation();
		this.props.onEdit(this.props.item.id);
	}

	onDeleteClick = (e) => {
		e.stopPropagation();
		this.props.onDelete(this.props.item.id);
	}

	render() {
		const { item } = this.props;
		return (
			<div className="contact">
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