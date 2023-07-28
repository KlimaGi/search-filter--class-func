import React, { useState } from 'react';
//import './index.css'; 
import { data } from './data.js';

function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className='text-center mt-4'>Contact Keeper</h1>
      <div className='form-container'>
        <input
          type='text'
          onChange={handleSearchChange}
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

export default App;
