import React from 'react';
import './ContactForm.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.contact,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.id !== props.contact.id) {
      return {
        ...props.contact,
        id: props.contact.id,
      };
    }
    return null;
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state);
  };

  onDeleteClick = () => {
    this.props.onDelete(this.props.contact);
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form action="" className="contact__form" onSubmit={this.onFormSubmit}>
        <input
          className="input__form"
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Name"
          autoFocus={true}
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <input
          className="input__form"
          autoComplete="off"
          type="text"
          name="surname"
          placeholder="Surname"
          value={this.state.surname}
          onChange={this.onInputChange}
        />
        <input
          className="input__form"
          autoComplete="off"
          type="text"
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.onInputChange}
        />
        <button
          className="btn btn__save"
          type="submit"
        >Save
        </button>
        {this.state.id ? (
          <button
            type="button"
            className="btn btn__delete"
            onClick={this.onDeleteClick}
          >Delete
          </button>
          ) : ( ''
        )}
      </form>
    );
  }
}