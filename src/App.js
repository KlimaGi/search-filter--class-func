import React, { Component } from 'react';
//import './index.css'; 
import { data } from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: data,
      search: '',
    };
  }

  // const sortName = () => {
  //   this.setState({
  //     contacts: this.state.contacts.sort((a, b) => {
  //       return a.first_name.toLowerCase() < b.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > b.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     }),
  //   });
  // };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { contacts, search } = this.state;

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
          {contacts
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <ul key={index}>
                <li>{item.first_name}</li>
              </ul>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
