import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { genres } from '../config';

function SelectGenre({ handleSelect }) {
  return (
    <FormControl>
      <Select
        onChange={handleSelect}
        defaultValue={0}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
        ))}
      </Select>
      <FormHelperText>Search by genre</FormHelperText>
    </FormControl>
  );
}

export default SelectGenre;
