import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact, setEditingContact }) {
  return (
    <div className="mt-6">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
          setEditingContact={setEditingContact}
        />
      ))}
    </div>
  );
}

export default ContactList;

