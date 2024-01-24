import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='h-8 px-8 bg-green-500 flex items-center justify-between'>
        <h1>Prominence Burn</h1>
        <div className='flex gap-8'>
            <Link href="/About">About</Link >
            <Link href="/Courses" >Career</Link >
            <Link href = "/Product">Blog</Link >
        </div>
    </div>
    </>
  )
}

export default Header
