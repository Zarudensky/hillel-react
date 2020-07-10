import React from 'react';
import './ContactsListItem.css';

function ListItem({ item, onItemDelete, onItemEdit }) {
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
        <button
          className="btn btn__delete"
          onClick={e => e.stopPropagation() || onItemDelete(item.id)}
        >
          Delete
        </button>
        <button
          className="btn btn__edit"
          onClick={e => e.stopPropagation() || onItemEdit(item.id)}
          >
            Edit
          </button>
      </div>
    </div>
  );
}

export default ListItem;
