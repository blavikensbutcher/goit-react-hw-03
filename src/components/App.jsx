import './App.css';
import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchBox } from './SearchBox/SearchBox.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContact] = useState(JSON.parse(localStorage.getItem('contacts')) || []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, setContact]);

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
