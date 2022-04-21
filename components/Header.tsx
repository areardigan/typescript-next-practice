import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="flex">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt="medium"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex ">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
