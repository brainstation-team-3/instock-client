import searchIcon from '@assets/icons/search-24px.svg'

function SearchBar() {
  return (
    <div className="md:min-w-40 relative flex md:w-1/4">
      <input
        className="mb-6 w-full rounded-full border-2 border-instock-cloud py-3 pl-6 pr-12 text-sm outline-0 duration-150
                        ease-in-out focus:border-instock-indigo md:mb-0 md:py-2"
        type="text"
        placeholder="Search..."
      />
      <img className="absolute right-3 top-3 fill-instock-slate md:right-2 md:top-2" src={searchIcon} alt="search" />
    </div>
  )
}

export default SearchBar
