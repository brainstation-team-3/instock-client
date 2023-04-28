import { Link } from 'react-router-dom'
import React from 'react'

const sharedStyle = 'h-9 md:h-9.5 px-4 w-full md:w-fit md:shrink-0 rounded-3xl text-mh3 md:text-h3'

// to add render logic if button type is button or submit //
// also need to add ButtonSecondary and ButtonDelete based off the style guide

function ButtonPrimary({ type, link, text }) {
  return (
    <Link className='' to={link}>
      <button type={type} className={`${sharedStyle} bg-instock-indigo hover:bg-instock-black`}>
        <span className='text-mh3 text-white'>{text}</span>
      </button>
    </Link>
  )
}

export { ButtonPrimary }

