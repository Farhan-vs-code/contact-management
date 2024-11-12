import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, editContact, editingContact, setEditingContact }) {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    } else {
      setContact({ name: '', phone: '', email: '' });
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      editContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Phone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        className="border p-2 mb-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
}

export default ContactForm;

