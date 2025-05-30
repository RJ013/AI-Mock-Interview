"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'



function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    })
  return (
    <div className='flex p-4 items-center justify-between bg-slate-100 shadow-sm'>
        <Image src={'/logo.svg'} width={50} height={80}  alt='logo'/>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary  hover:font-bold transition-all cursor-pointer
               ${path=='/dashboard'&&'text-primary font-bold'}`
              }>Dashboard</li>
          
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header