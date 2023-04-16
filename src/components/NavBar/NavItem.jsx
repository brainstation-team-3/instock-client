import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavItem({ to, name, active, setActiveLink }) {
  return (
    <NavLink
      className={`
        ${active === name ? 'bg-instock-black' : ''}
        w-52 text-sm rounded-full py-2 text-center align-middle text-instock-cloud
        hover:text-instock-white hover:underline
      `}
      to={to}
      onClick={() => setActiveLink(name)}
    >
      {name}
    </NavLink>)
} 
