import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/logos/InStock-Logo_1x.png'
import NavItem from '@components/NavBar/NavItem'
import NavLinks from './links.json'

export default function NavBar() {

  const [ActiveLink, setActiveLink] = useState('Warehouse')
  
  return (
    <header className='pt-1 pb-16 bg-instock-graphite md:p-0'>
      <nav className='flex flex-col items-center justify-between gap-4 py-4 section md:flex-row'>
        <div className='flex justify-between'>
          <NavLink to='/'>
            <img className='w-24' src={logo} alt='instock-logo' />
          </NavLink>
        </div>
        <div className='mt-2 flex w-full justify-center gap-4 md:w-56 md:gap-1 md:m-0'>
          {NavLinks.map((link, index) => (
            <NavItem
              key={index}
              to={link.path}
              name={link.name}
              active={ActiveLink}
              setActiveLink={setActiveLink}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}
