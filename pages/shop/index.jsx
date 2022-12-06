import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import CoverSection from '../../components/CoverSection'
import ShopCover from '../../public/assets/images/ShopCover.webp'
import Product from '../../components/Product'
import products from '../../data/products'
import { MdOutlineManageSearch } from 'react-icons/md'
import Filter from '../../components/Filter'
import HeadMeta from '../../components/HeadMeta'
const Shop = () => {
    const [filter, setFilter] = useState(false);
    const [productsList, setProductsList] = useState(products)
    const [filterData, setFilterData] = useState({ search: '', price: [0, 100], sort: 'We Recommend'}) 


    useEffect(() => {
        setProductsList(products.filter(product => product.title.toLowerCase().includes(filterData.search.toLowerCase())).filter(product => product.price >= filterData.price[0] && product.price <= filterData.price[1]))
    }, [filterData])

  return (
    <>
    <HeadMeta title={'Shop'} desc='Shop' />
    <main>
        <CoverSection src={ShopCover} height={400} btn={false} primaryText='Shop' />
        <section className='py-10 lg:py-20'>
        <div onClick={() => setFilter(!filter)} className='mx-auto justify-center items-center flex flex-col gap-2 text-gray-500 hover:text-gray-600 transitions text-lg mb-10 lg:mb-20 font-light cursor-pointer'>
            <button className='text-3xl'><MdOutlineManageSearch /></button>
            <p
            style={{ fontFamily: 'DM Sans'}}
            >Search Products</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-6'>
            {filter && <Filter filteredData={filterData} setFilteredData={setFilterData}/>}
            <Container className={`grid grid-cols-1 md:grid-cols-2 ${filter ? '' : 'lg:grid-cols-3'} gap-6`}>
                {productsList.length > 0 ? productsList.map(product => (
                    <Product key={product.id} id={product.id} src={product.image} zoom shop price={product.price} title={product.title}  />
                )) : <p className={`text-center md:col-span-2 ${filter ? '' : 'lg:col-span-3'}`}>No products match</p>}
            </Container>
        </div>
        </section>
    </main>
    </>
  )
}

export default Shop