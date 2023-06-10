import React from 'react';

const SearchBar = (props: { searchQuery: string, setSearchQuery: (searchQuery: string) => void, selectedGenre: string, setSelectedGenre: (selectedGenre: string) => void }) => {
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
        <select
            value={props.selectedGenre}
            onChange={(event) => props.setSelectedGenre(event.target.value)}
        >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy drama">Comedy</option>
            <option value="Crime drama">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            </select>
    </div>
  );
};

export default SearchBar;