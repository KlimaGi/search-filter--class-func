import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  return (

    <div>
      <h1 className='text-center mt-4'>Contact Keeper</h1>
      <Form>
        <InputGroup className='my-3'>

          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search contacts'
          />
        </InputGroup>
      </Form>


      <div>
        {data
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
