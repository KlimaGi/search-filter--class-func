import React, { Component } from 'react';
import './index.css';
import { data } from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: data,
      search: '',
      selectedContact: null,
      isDropdownOpen: false, // State to track whether the dropdown is open
    };
  }

  handleSearchChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value, isDropdownOpen: true });
    if (value === '') {
      this.setState({ selectedContact: null });
    }
  };

  handleContactSelect = (e) => {
    const selectedContactId = parseInt(e.target.value);
    const selectedContact = this.state.contacts.find(
      (contact) => contact.id === selectedContactId
    );
    this.setState({ selectedContact, isDropdownOpen: false });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { contacts, search, selectedContact, isDropdownOpen } = this.state;

    const filteredContacts = contacts.filter((item) => {
      return search.toLowerCase() === ''
        ? item
        : item.first_name.toLowerCase().includes(search);
    });

    return (
      <div>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <div className='form-container'>
          <input
            type='text'
            onChange={this.handleSearchChange}
            value={search}
            placeholder='Search contacts'
            className='form-control'
          />
        </div>


        <select
          value={selectedContact ? selectedContact.id : ''}
          onChange={this.handleContactSelect}
          onBlur={this.closeDropdown}
          size={isDropdownOpen ? (filteredContacts.length < 20 ? filteredContacts.length : '20') : '1'}
        >
          <option value=''>Select a contact</option>
          {filteredContacts.map((item) => (
            <option key={item.id} value={item.id}>
              {item.first_name}
            </option>
          ))}
        </select>




      </div>
    );
  }
}

export default App;
