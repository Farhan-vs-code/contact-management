import React from 'react';

function ContactItem({ contact, deleteContact, setEditingContact }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-2">
      <div>
        <h2 className="font-semibold">{contact.name}</h2>
        <p className="text-sm">{contact.phone}</p>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div>
        <button
          onClick={() => setEditingContact(contact)}
          className="text-blue-500 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteContact(contact.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
