'use client'
import React, { useState } from 'react'
import Link from 'next/link'


const HamburgerMenu = () => {

    const [modalOpen, setModalOpen] = useState<Boolean>(false)

    return (
        <>
            <div className=' flex items-center hover:bg-slate-600'>
                <button onClick={() => setModalOpen(!modalOpen)}>
                    <div className="w-10 h-1 bg-black m-1"></div>
                    <div className="w-10 h-1 bg-black m-1"></div>
                    <div className="w-10 h-1 bg-black m-1"></div>
                </button>
            </div>

            {modalOpen &&
            <div className='absolute w-[100vw] text-xl font-bold mt-16 bg-slate-500 bg-opacity-95 top-0 left-0 justify-center text-center'>
                <div className='mt-2 mb-2'><Link href='/'>Home</Link></div>
                <div className='mb-2'><Link href='/aboutus'>About US</Link></div>
            </div>
            }
        </>
    )
}

export default HamburgerMenu