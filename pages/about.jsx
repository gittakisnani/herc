import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../components/Container'
import CoverSection from '../components/CoverSection'
import HeadMeta from '../components/HeadMeta'
import AboutCover from '../public/assets/images/AboutCover.webp'
import AboutLaura from '../public/assets/images/AboutLaura.webp'
import AboutSoustainability from '../public/assets/images/AboutSoustainability.webp'
const About = () => {
  return (
    <>
    <HeadMeta title='About' desc='About page' />
    <main>
        <CoverSection src={AboutCover} height={400} btn={false} primaryText='About Mina' />
        <h2  style={{ fontFamily: 'Poppins'}} className='text-center text-2xl my-10 lg:my-20 w-fit max-w-[500px] mx-auto px-2'>Mina is a brand born out of love for ceramics, vivid colours and passion for life.</h2>
        <section className='bg-gray-100'>
            <Container className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
                <Image src={AboutLaura} alt='About Laura' />
                <div style={{ fontFamily: 'Poppins'}} className='flex justify-center flex-col py-10'>
                    <h2 className='text-3xl lg:text-6xl font-medium mb-4'>
                    Alex & Laura
                    </h2>
                    <p className='text-lg leading-8'>
                    Two creative minds that came together at art school, Alex and Laura founded Mina with a shared passion for design and sustainability. For them, success is more than just about having a bestselling product. <br /> <br />

                    Every piece in our store has been created with love by Alex and Laura. They take inspiration from the world around them when it comes to shapes, colors, and the clay that they work with. <br /> <br />

                    Join us on our mission to fill every home with beautiful, sustainable décor. 
                    </p>
                </div>
            </Container>
        </section>
        <section className='bg-[#ff945c]'>
            <Container className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
                <Image src={AboutSoustainability} alt='About Sustainability' />
                <div style={{ fontFamily: 'Poppins'}} className='flex justify-center gap-6 flex-col text-white py-10'>
                    <h2 className='text-3xl lg:text-6xl font-medium'>
                    Sustainability
                    </h2>
                    <p className='text-lg leading-8'>
                    Our thoughts about the planet impact everything we do, from the clay we use to the packaging we provide. Find out how we stay responsible. 
                    </p>
                    <button className='bg-gray-50 w-fit hover:bg-gray-200 text-lg text-black transitions p-4 px-10'>
                    <Link href='/sustainability'>
                        Learn more
                    </Link>
                    </button>
                </div>
            </Container>
        </section>
    </main>
    </>
  )
}

export default About