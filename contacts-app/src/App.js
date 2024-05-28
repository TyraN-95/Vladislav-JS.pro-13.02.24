import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedContacts = data.map(user => ({
          id: user.id,
          name: user.name.split(' ')[0],
          surname: user.name.split(' ')[1] || '',
          phone: user.phone
        }));
        setContacts(formattedContacts);
      });
  }, []);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setShowForm(false);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Контакты</h1>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      {showForm ? (
        <AddContactForm onAddContact={handleAddContact} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Добавить контакт</button>
      )}
    </div>
  );
};

export default App;
