import React from 'react';
import './Header.css';
import Modal from './Modal';

export default class Header extends React.Component {
  state = {
    modal: false,
  }

  showModal = () => {
    this.setState({modal: !this.state.modal});
  }
  
  render() {
    const { onAddNewContact } = this.props;
    return (
      <div className="header container">
        <h1 className="title title__main">Contact List</h1>
        <button onClick={this.showModal} className="btn btn__add">Add contact</button>
        { this.state.modal && 
          <Modal
            handleModal={this.showModal}
            onAddNewContact={onAddNewContact}
          />
        }
      </div>
    )
  }
}