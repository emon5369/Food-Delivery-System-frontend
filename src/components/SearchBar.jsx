import '../Styles/SearchBar.css'
const SearchBar = ({ onSearch }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.search.value;
        onSearch(query);
    };

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input type="search" name="search" placeholder="Search for Food.." required />
            <input type="submit" name="submit" value="Search" className="search-btn" />
        </form>
    );
};

export default SearchBar;
