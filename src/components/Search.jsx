import React from 'react';
import { TextField } from '@material-ui/core';

import SelectGenre from './SelectGenre';

function Search({
  handleInput,
  handleSelect,
  totalResults,
}) {
  return (
    <section className="searchBox-wrap">
      <SelectGenre handleSelect={handleSelect} />
      <TextField
        label="Search by phrase"
        placeholder="Confirm with Enter"
        className="searchBox"
        onKeyPress={handleInput}
      />
      <p className="amount">
        <span>Total results: </span>
        {totalResults}
      </p>
    </section>
  );
}

export default Search;
