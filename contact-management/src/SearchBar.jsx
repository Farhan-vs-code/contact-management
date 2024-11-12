import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 w-full rounded mb-4"
    />
  );
}

export default SearchBar;
