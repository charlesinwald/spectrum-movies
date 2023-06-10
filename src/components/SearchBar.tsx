import React from 'react';

const SearchBar = (props: { searchQuery: string, setSearchQuery: (searchQuery: string) => void }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    props.setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={props.searchQuery}
        onChange={handleInputChange}
        placeholder="Search by movie title"
      />
    </div>
  );
};

export default SearchBar;