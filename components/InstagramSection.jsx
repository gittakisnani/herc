import Image from 'next/image'
import React from 'react'
import Container from './Container'
import Instagram1 from '../public/assets/images/Instagram1.webp'
import Instagram2 from '../public/assets/images/Instagram2.webp'
import Instagram from '../public/assets/images/Instagram.webp'
const InstagramSection = () => {
  return (
    <section>
        <h2 
        style={{ fontFamily: 'Poppins'}}
        className='text-2xl md:text-3xl lg:text-5xl font-medium text-center py-6 md:py-8 lg:py-12'>Follow us on Instagram</h2>
        <Container className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <Image className='mx-auto' src={Instagram1} alt='Instagram' />
        <Image className='mx-auto' src={Instagram2} alt='Instagram' />
        <Image className='mx-auto' src={Instagram} alt='Instagram' />
        </Container>
        <h4 
        style={{ fontFamily: 'Poppins'}}
        className='text-xl md:text-2xl my-6 underline text-center font-medium'>@mina_studio</h4>
    </section>
  )
}

export default InstagramSection