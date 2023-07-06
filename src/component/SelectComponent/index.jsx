import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const SelectComponent = ({ handleCategory, cat }) => {
  const { jobType } = useSelector(state => state.getAllJobType);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Category"
          onChange={handleCategory}
        >
          <MenuItem value="">
            All
          </MenuItem>
          {
            jobType && jobType.map(item => (
              <MenuItem
                key={item._id}
                value={item._id}
              >
                {item.jobTypeName}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectComponent;