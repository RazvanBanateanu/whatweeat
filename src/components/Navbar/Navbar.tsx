import React from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Navbar = () => {
  return (
    <div className=" flex justify-between bg-slate-500 h-16 w-[100vw] px-5">
      <div className=" flex flex-col text-white items-center text-sm font-bold mt-3">
        <h1>WHAT</h1> 
        <h1>WE EAT</h1>
      </div>

      <HamburgerMenu />
    </div>
  )
}

export default Navbar