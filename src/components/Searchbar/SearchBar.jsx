import React from 'react'
import SearchIcon from '@/assets/icons/search-24px.svg'


function SearchBar() {
  return (
    <div className="flex flex-row w-full p-2 border border-instock-cloud rounded-3xl">
      <input
        className=" text-mh3 w-full"
        type="text"
        placeholder="Search..."
      />
      <img className="" src={SearchIcon} alt="search-logo" />
    </div>
  )
}

export default SearchBar