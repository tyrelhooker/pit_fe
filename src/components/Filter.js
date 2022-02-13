import React, { useRef } from 'react';

const Filter = ({ handleSearch, searchResult }) => {
  const searchInput = useRef();

  const change = () => {
    handleSearch(searchInput.current.value);
  }

  return (
    <>
      Search for pencil company name:
      <input
        ref={searchInput}
        onChange={change}
        placeholder='Enter a pencil compnay name to search'
      />
    </>
  )
}

export default Filter;