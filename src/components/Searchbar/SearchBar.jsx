import searchIcon from "@assets/icons/search-24px.svg";


function SearchBar() {
  return (
    <div className="relative flex md:min-w-40 md:w-1/4">
      <input className="mb-6 w-full rounded-full border-2 py-3 pr-12 pl-6 text-sm outline-0 duration-150 ease-in-out
                        border-instock-cloud focus:border-instock-indigo md:mb-0 md:py-2"
             type="text"
             placeholder="Search..."
      />
      <img className="absolute top-3 right-3 fill-instock-slate md:top-2 md:right-2"
           src={searchIcon}
           alt="search"
      />
    </div>
  )
}

export default SearchBar
