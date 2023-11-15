import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  function handleSubmit(e) {
    e.preventDefault();
    // Handle the search submission logic here
    console.log("Search submitted:", search);
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
