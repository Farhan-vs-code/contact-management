import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import SearchBar from './SearchBar';

function App1() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact)));
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Manager</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App1;

