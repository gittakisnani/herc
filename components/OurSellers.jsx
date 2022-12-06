import React from 'react'
import products from '../data/products'
import Button from './Button'
import Container from './Container'
import Product from './Product'

const OurSellers = () => {
  return (
    <section>
        <h2 
        style={{ fontFamily: 'Poppins'}}
        className='text-2xl md:text-3xl lg:text-5xl font-medium text-center py-6 md:py-8 lg:py-12'>Our bestsellers</h2>
        <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.filter((product, index) => index <= 3).map(product => (
              <Product key={product.id} id={product.id} src={product.image} price={product.price}  title={product.title} />
            ))}
        </Container>
        <Button />
    </section>
  )
}

export default OurSellers