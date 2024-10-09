import React from 'react'

function SearchBar() {
  return (
    <div className='searchBar'>
        <div className='type'></div>
        <form type="text">
            <input type="text" nae="location" placeholder='City Location' />
            <input type="number" nae="minPrice" placeholder='Min Price' />
            <input type="number" nae="maxPrice" placeholder='Max Price' />
        </form>
      
    </div>
  )
}

export default SearchBar