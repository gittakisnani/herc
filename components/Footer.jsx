import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='py-10 lg:py-20 bg-gray-100'>
        <Container className='grid grid-cols-1 lg:grid-cols-2'>
            <h2 className='text-xl md:text-2xl font-bold'>
              <Link href='/'>MINA</Link>
            </h2>
            <div className='flex flex-col gap-4 lg:flex-row items-end lg:items-center lg:justify-end text-lg'>
                <p className='underline underline-offset-2 font-light'>
                    <Link href='payment-delivery'>
                        Payments & Delivery
                    </Link>
                </p>
                <p className='underline underline-offset-2 font-light'>
                    <Link href='returns'>
                        Returns
                    </Link>
                </p>
                <p className='underline underline-offset-2 font-light'>
                    <Link href='contact'>
                        Contact
                    </Link>
                </p>
            </div>
            <div className='flex items-center gap-6 mt-5 text-xl'>
                <span className='transitions text-black hover:text-black/80'>
                    <Link href='https://twitter.com'>
                        <BsTwitter />
                    </Link>
                </span>
                <span className='transitions text-black hover:text-black/80'>
                    <Link href='https://facebook.com'>
                        <BsFacebook />
                    </Link>
                </span>
                <span className='transitions text-black hover:text-black/80'>
                    <Link href='https://instagram.com'>
                        <BsInstagram />
                    </Link>
                </span>
            </div>
        </Container>
    </footer>
  )
}

export default Footer