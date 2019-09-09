import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setQuery(event.target.value)
    };

  return (
    <section className="search-form">
      <form onSubmit={(event) => onSearch(event, query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
