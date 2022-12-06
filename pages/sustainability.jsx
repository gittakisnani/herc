import Image from 'next/image'
import React from 'react'
import Container from '../components/Container'
import CoverSection from '../components/CoverSection'
import HeadMeta from '../components/HeadMeta'
import SustainabilityCover from '../public/assets/images/AboutCover.webp'
import SustainabilityEthos from '../public/assets/images/SustainabilityEthos.webp'
import SustainabilityMaterial from '../public/assets/images/SustainabilityMaterial.webp'
const about = () => {
  return (
    <>
    <HeadMeta title='Sustainability' desc='Sustainability page' />
    <main>
        <CoverSection src={SustainabilityCover} height={400} btn={false} primaryText='Sustainability' />
        <h2  style={{ fontFamily: 'Poppins'}} className='text-center text-2xl my-10 lg:my-20 w-fit max-w-[500px] mx-auto px-2'>We care about our planet. For this reason, Mina aims to be operating sustainably and ethically at every level.</h2>
        <section className='bg-gray-100'>
            <Container className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
                <Image src={SustainabilityEthos} alt='Sustainability Ethos' />
                <div style={{ fontFamily: 'Poppins'}} className='flex justify-center flex-col py-10'>
                    <h2 className='text-3xl lg:text-6xl font-medium mb-4'>
                    Working Ethos
                    </h2>
                    <p className='text-lg leading-8'>
                    For Alex and Laura, planning ahead is a central component of sustainable design. Work begins with sketches of ideas before any clay is modeled. Fully conceptualizing and refining each design beforehand helps us to reduce material waste. <br /> <br />

                    We strive to work collaboratively at every stage. Our team efforts minimize energy usage in the studio. 
                    </p>
                </div>
            </Container>
        </section>
        <section className='bg-[#ff945c]'>
            <Container className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
                <Image src={SustainabilityMaterial} alt='Sustainability Material' />
                <div style={{ fontFamily: 'Poppins'}} className='flex justify-center gap-6 flex-col text-white py-10'>
                    <h2 className='text-3xl lg:text-6xl font-medium'>
                    Materials
                    </h2>
                    <p className='text-lg leading-8'>
                    Surrounded by beautiful landscapes, it is only right that our studio is stocked with only the finest local materials that haven{"'"}t had to travel far to get to us. Our clay is as locally sourced as possible for every product. <br /> <br /> <br />


We ensure that the paint we use on our products is low-VOC and never washed into local waterways during production.
                    </p>
                </div>
            </Container>
        </section>
    </main>
    </>
  )
}

export default about