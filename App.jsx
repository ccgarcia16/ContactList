import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(API_URL);
      const json = await response.json();
      const contactList = json;
      setContacts(contactList);
    }
    getContacts();
  },[]);

  return (
    <>
      <h1>Contact List</h1>
      <div className='divContainer'>
        <ul>
          {
            contacts.map((singleContact) => {
              return <li>{singleContact.name}</li>
          })}
          </ul>

        <ul>
          {
            contacts.map((singleContact) => {
              return <li>{singleContact.email}</li>
            })
          }
        </ul>

        <ul>
          {
            contacts.map((singleContact) => {
              return <li>{singleContact.phone}</li>
            })
          }
        </ul>
      </div>
    </>
  )}

export default App
