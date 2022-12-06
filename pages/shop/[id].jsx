import React from 'react'
import CoverSection from '../../components/CoverSection'
import ShopCover from '../../public/assets/images/ShopCover.webp'
import Product from '../../components/Product'
import products from '../../data/products'
import Container from '../../components/Container'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import HeadMeta from '../../components/HeadMeta'

const ProductPage = () => {
    const router = useRouter();
    const product = products.find(product => +product.id === Number(router.query.id));
  return (
    <>
        <HeadMeta title={product?.title} desc={product?.details} />
        <main>
            <CoverSection src={ShopCover} height={400} btn={false} primaryText='Shop' />
                <section className='py-10 lg:py-20'>
                <Container className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12`}>
                    <Image src={product?.image} alt={product?.title} />
                    <div 
                    style={{ fontFamily: 'Poppins'}}
                    className='flex flex-col gap-4'
                    >
                    <h2 className='text-xl md:text-2xl font-semibold'>{product?.title}</h2>
                    <p className='text-sm font-medium text-gray-400'>
                        <Link href='/shop'>
                            Back to catalog
                        </Link>
                    </p>
                    <p className='font-light text-xl md:text-2xl'>${product?.price}</p>
                    <button className='p-4 px-12 text-gray-50 border-2 border-purple-900 transitions bg-purple-900 hover:bg-purple-800 font-medium w-fit'>
                        <Link href='/shop'>
                            Buy now
                        </Link>
                    </button>   
                        <h3 className='text-lg font-semibold'>Product details</h3>
                        <p className='-mt-2'>{product?.details}</p>

                        <div className='flex flex-col gap-1'>
                            <p><span className='font-semibold'>Material: </span>{product?.material}</p>
                            <p><span className='font-semibold'>Color: </span>{product?.color}</p>
                            <p><span className='font-semibold'>Measurements: </span>{product?.measurements}</p>
                        </div>
                    </div>
                </Container>
                </section>
        </main>
    </>
  )
}

export default ProductPage