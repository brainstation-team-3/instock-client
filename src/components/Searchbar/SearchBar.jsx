import React from 'react'
import SearchIcon from '@/assets/icons/search-24px.svg'


function SearchBar() {
  return (
    <form className="flex flex-row w-full md:basis-1/4 h-9 md:h-8.5 relative ">
      <input
        className=" text-mh3 md:text-h3 w-full px-4 border border-instock-cloud focus:outline-instock-indigo rounded-3xl"
        type="text"
        placeholder="Search..."
      />
      <button className='absolute right-4 top-1.5'>
      <img className="" src={SearchIcon} alt="search-logo" />
      </button>
    </form>
  )
}

export default SearchBar