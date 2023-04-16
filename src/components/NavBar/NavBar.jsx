import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/logos/InStock-Logo_1x.png'
import NavItem from '@components/NavBar/NavItem'

export default function NavBar() {
  return (
    <>
      <div className="bg-instock-graphite ">
        <nav className="section flex flex-col gap-4 py-4 md:flex-row justify-between items-center xl:px-24">
          <section className="flex justify-center ">
            <NavLink to="/">
              <img className="w-24" src={logo} />
            </NavLink>
          </section>
          <section className="flex text-instock-white md:w-56 justify-around">
            <NavItem to='/warehouse' name='Warehouse'/>
            <NavItem to='/inventory' name='Inventory'/>
          </section>
        </nav>
      </div>
    </>
  )
}
