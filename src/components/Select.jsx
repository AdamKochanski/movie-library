import React from 'react';

import { genres } from '../config';

function Select({ handleSelect }) {
  return (
    <select onChange={handleSelect}>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
  );
}

export default Select;
