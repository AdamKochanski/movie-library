import React from 'react';
import { TextField } from '@material-ui/core';

import SelectGenre from './SelectGenre';

function Search({
  handleInput,
  handleSelect,
  search,
  totalResults,
}) {
  return (
    <section className="searchBox-wrap">
      <SelectGenre handleSelect={handleSelect} />
      <TextField
        label="Search for movie..."
        placeholder="Confirm with Enter"
        className="searchBox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <p className="amount">
        <span>Total results: </span>
        { totalResults}
      </p>
    </section>
  );
}

export default Search;
