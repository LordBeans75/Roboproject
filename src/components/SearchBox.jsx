/* eslint-disable react/prop-types */
const SearchBox = ({searchChange}) => {
	return (
        <input 
        className='pa3 b--green bg-lightest-blue'
        type="search" 
        placeholder="search robots"
        onChange={searchChange}
        />

    );
}

export default SearchBox;