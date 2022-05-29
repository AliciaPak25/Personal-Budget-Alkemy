import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCategory() {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 395 }}>
        <InputLabel htmlFor="grouped-select">Select a category</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Select a category">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Income</ListSubheader>
          <MenuItem value={1}>Salary</MenuItem>
          <MenuItem value={2}>Freelance</MenuItem>
          <MenuItem value={3}>Investments</MenuItem>
          <MenuItem value={4}>Extra Income</MenuItem>
          <MenuItem value={5}>Christmas Bonus</MenuItem>
          <ListSubheader>Expenses</ListSubheader>
          <MenuItem value={6}>Rent</MenuItem>
          <MenuItem value={7}>Taxes</MenuItem>
          <MenuItem value={8}>Services</MenuItem>
          <MenuItem value={9}>Education</MenuItem>
          <MenuItem value={10}>Credit Card</MenuItem>
          <ListSubheader>Other option</ListSubheader>
          <MenuItem value={11}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

