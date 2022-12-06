import Link from 'next/link'
import React from 'react'
import Container from './Container'

const Button = () => {
  return (
    
    <Container className='flex justify-center items-center my-6 lg:my-10'>
        <button className='p-4 px-10 bg-gray-50 border-2 border-purple-900 transitions hover:bg-purple-900 hover:text-gray-50 text-purple-900 font-medium'>
            <Link href='/shop'>
                Buy now
            </Link>
        </button>   
    </Container>
  )
}

export default Button

