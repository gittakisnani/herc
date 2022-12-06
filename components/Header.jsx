import Link from 'next/link'
import React, { useState } from 'react'
import Container from './Container'
import NavBar from './NavBar'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import dynamic from 'next/dynamic'
import useWindowSize from '../hooks/useWindowSize'


const Header = () => {
  const { width } = useWindowSize()
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => setNavbar(!navbar)
  return (
    <header className='bg-white py-4 lg:py-6 shadow shadow-purple-600/20 relative'>
        <Container className='flex items-center justify-between'>
            <div className='flex items-center gap-10'>
            {width < 1024 && <button onClick={handleNavbar} className='text-2xl'>
              {!navbar ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>}
            <h2 className='text-xl md:text-2xl font-bold'>
              <Link href='/'>MINA</Link>
            </h2>
            </div>
            {(width >= 1024 || navbar) && <NavBar />}
        </Container>
    </header>
  )
}

export default Header