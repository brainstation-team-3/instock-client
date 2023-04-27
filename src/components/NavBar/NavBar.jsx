import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/logos/InStock-Logo.svg'
import NavItem from '@components/NavBar/NavItem'
import NavLinks from './links.json'

export default function NavBar() {

  const [ActiveLink, setActiveLink] = useState('warehouse')
  
  return (
    <header className='pt-1 pb-20 md:pb-32 bg-instock-graphite'>
      <nav className='flex flex-col items-center justify-between gap-4 py-4 section md:flex-row'>
        <div className='flex justify-between'>
          <NavLink to='/'>
            <img
              onClick={() => setActiveLink('warehouse')}
              src={logo}
              alt='instock-logo'
            />
          </NavLink>
        </div>
        <div className='mt-2 flex w-full md:w-fit justify-center gap-4 md:gap-1 md:m-0'>
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
