import './App.css';
import { useState } from 'react';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchBox } from './SearchBox/SearchBox.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContact] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  function deleteUser(userID) {
    setContact(prevState => {
      return prevState.filter(contact => contact.id !== userID);
    });
  }

  function addUser(newUser) {
    setContact(prevState => {
      return [...prevState, newUser];
    });
  }

  function filterUsers() {
    return contacts.filter(contact => {
      const inputValueLowerCase = inputValue.toLowerCase();
      const nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(inputValueLowerCase);
    });
  }

  return (
    <>
      <h1 className="container">Phonebook</h1>

      <ContactForm contacts={contacts} addContact={addUser} />

      <SearchBox filter={filterUsers} inputValue={inputValue} setInputValue={setInputValue} />
      <ContactList contacts={filterUsers()} onDelete={deleteUser} />
    </>
  );
}

export default App;
