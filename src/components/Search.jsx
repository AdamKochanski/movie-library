import React from 'react';

import Select from './Select';

function Search({
  handleInput,
  handleSelect,
  search,
  totalResults,
}) {
  return (
    <section className="searchBox-wrap">
      <Select handleSelect={handleSelect} />
      <input
        type="text"
        placeholder="Press Enter for search..."
        className="searchBox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <span className="amount">
        Total results:
        {totalResults}
      </span>
    </section>
  );
}

export default Search;
