import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id='search'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
      <label for='search'>Search</label>
    </div>
  );
}

export default SearchBox;