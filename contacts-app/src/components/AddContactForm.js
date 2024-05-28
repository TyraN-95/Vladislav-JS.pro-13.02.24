import React, { useState } from 'react';

const AddContactForm = ({ onAddContact, onCancel }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      surname,
      phone
    };
    onAddContact(newContact);
    setName('');
    setSurname('');
    setPhone('');
  };

  return (
    <div>
      <h2>Форма добавления контакта</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Фамилия:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <label>
          Телефон:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </form>
    </div>
  );
};

export default AddContactForm;
