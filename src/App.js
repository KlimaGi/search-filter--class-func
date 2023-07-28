import React, { Component } from 'react';
import './index.css'; // Assuming you have a separate CSS file for styling
import { data } from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: data,
      search: '',
      selectedContact: null,
    };
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value, selectedContact: null });
  };

  handleContactSelect = (e) => {
    const selectedContactId = parseInt(e.target.value);
    const selectedContact = this.state.contacts.find(
      (contact) => contact.id === selectedContactId
    );
    this.setState({ selectedContact });
  };

  render() {
    const { contacts, search, selectedContact } = this.state;

    const filteredContacts = contacts.filter((item) => {
      return search.toLowerCase() === ''
        ? item
        : item.first_name.toLowerCase().includes(search);
    });

    return (
      <div>
        <h1 className='text-center mt-4'>Contacts</h1>
        <div className='form-container'>
          <input
            type='text'
            onChange={this.handleSearchChange}
            value={search}
            placeholder='Search contacts'
            className='form-control'
          />
        </div>

        <div>
          <select
            className='form-control'
            value={selectedContact ? selectedContact.id : ''}
            onChange={this.handleContactSelect}
          >
            <option value=''>Select a contact</option>
            {filteredContacts.map((item) => (
              <option key={item.id} value={item.id}>
                {item.first_name}
              </option>
            ))}
          </select>

          {selectedContact && (
            <div>
              <h2>Selected Contact:</h2>
              <p>{selectedContact.first_name}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;



// <select>
//   {this.props.data.options.map((option, index) => {
//     return (
//       <option value={option.value} key={option + index}>
//         {option.text}
//       </option>
//     );
//   })}
// </select>