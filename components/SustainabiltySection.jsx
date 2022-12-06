import React from 'react'
import Container from './Container'
import Sustainability from './Sustainability'
import SustainabilityImage from '../public/assets/images/SustainabilityImage.webp'
import SustainabilityImage2 from '../public/assets/images/SustainabilityImage2.webp'
const SustainabilitySection = () => {
  return (
    <section className='my-6 lg:my-12'>
        <Container className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6'>
            <Sustainability src={SustainabilityImage} primaryText='About Mina' secondaryText='Mina is a brand born out of a passion for ceramics.' />
            <Sustainability src={SustainabilityImage2} primaryText='Sustainability' secondaryText='Mina is an eco-friendly brand that cares about sustainability.' />
        </Container>
    </section>
  )
}

export default SustainabilitySection