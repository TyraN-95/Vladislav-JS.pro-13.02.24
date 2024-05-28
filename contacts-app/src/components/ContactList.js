import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Список контактов</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onDeleteContact(contact.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
