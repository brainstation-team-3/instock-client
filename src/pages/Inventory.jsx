import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '@components/Searchbar/SearchBar'
import {getInventory} from '@utils/helpers'
import InventoryList from '@components/Inventory/inventoryList'

export default function Inventory() {

  const [loading, setLoading] =useState(true)
  const [inventoryList, setInventoryList] =useState([])

  useEffect(() => {

    getInventory().then((data) => {
      setInventoryList(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col pb-10 bg-instock-light-grey section">
    <div className="w-full rounded-t-md border-b px-6 md:px-10 py-8 shadow-md bg-instock-white
    mt-[-4.2rem] md:mt-[-6.4rem] border-instock-cloud md:border-b-0 md:flex md:gap-4 md:justify-end md:items-start">
      <h3 className="mb-6 text-3xl font-bold md:mr-auto md:mb-0">Inventories</h3>
        <SearchBar />
        <Link to="/"
              className="block w-full rounded-full px-6 py-3 text-center text-sm font-bold text-white
              bg-instock-indigo hover:bg-instock-black duration-300 ease-in-out md:w-52 md:py-2">
          + Add New Item
        </Link>
    </div>
    <InventoryList inventoryList={inventoryList}/>
  </div>
  )
}
