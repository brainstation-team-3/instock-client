import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavItem({ to, name }) {
    return (<NavLink to={to} className= {({isActive}) => {
        return (
            "text-instock-light-grey text-center hover:underline hover:text-instock-white"  + (isActive ? "h-9 w-1/2 rounded-full bg-instock-black " : "h-9 w-1/2 text-instock-light-grey text-center ")
        )
    }}>
        {name}
        </NavLink>)
} 