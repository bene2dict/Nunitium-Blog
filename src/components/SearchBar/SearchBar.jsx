import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Find the topics you care about..." />
      <i className="material-symbols-outlined">search</i>
    </div>
  );
};

export default SearchBar;