import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css'
import { Slider } from 'primereact/slider';

const Filter = ({ filteredData, setFilteredData }) => {
    const [price, setPrice] = useState(false);
    const [search, setSearch] = useState(false);
    const [sort, setSort] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('We Recommend');
    const [priceRange, setPriceRange] = useState([0, 80])

    useEffect(() => {
        setFilteredData({ search: searchText, sort: sortType, price: priceRange})
    }, [priceRange, search, searchText, setFilteredData, sort, sortType])
  return (
    <div
    style={{ fontFamily: 'Poppins' }}
    className='flex flex-col gap-2 p-6 lg:pl-10 py-2 lg:min-w-[300px] lg:max-w-[300px]'
    >
    <div onClick={() => setPrice(!price)} className='flex items-center gap-2 w-fit cursor-pointer font-medium'>
        <p>Price</p>
        <span style={price ? {rotate: '180deg'} : null} className='transitions'><BsChevronDown /></span>
    </div>
    {price && <div className='flex flex-col gap-2 my-2'>
        <div className='flex justify-center items-center gap-4 mb-3'>
            <input type="number" className='bg-gray-100 max-w-[100px] border duration-500 border-gray-200/80 p-1 px-2 outline-none' placeholder='from' value={priceRange[0]} onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])} />
            <p>-</p>
            <input type="number" className='bg-gray-100 max-w-[100px] border duration-500 border-gray-200/80 p-1 px-2 outline-none' placeholder='to' value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])} />
        </div>
        <Slider value={priceRange} onChange={(e) => setPriceRange(e.value)} range />
    </div>}
    <div onClick={() => setSearch(!search)} className='flex items-center gap-2 w-fit cursor-pointer font-medium'>
        <p>Search</p>
        <span style={search ? {rotate: '180deg'} : null} className='transitions'><BsChevronDown /></span>
    </div>
    {search && <input value={searchText} onChange={e => setSearchText(e.target.value)} type="text" className='bg-gray-100 border duration-500 border-gray-200/80  p-1 px-2 outline-none' placeholder='Search keywords' />}
    <div onClick={() => setSort(!sort)} className='flex items-center gap-2 w-fit cursor-pointer font-medium'>
        <p>SortBy</p>
        <span style={sort ? {rotate: '180deg'} : null} className='transitions'><BsChevronDown /></span>
    </div>
    {sort && <div>
        {['We Recommend', 'Newest Arrivals', 'Price Low to High', 'Price High To Low', 'Name: A to Z', 'Name: Z to A'].map((sortEl, index) => (
            <label key={index} htmlFor={index} className='flex items-center gap-2'>
                <input name='sort' checked={sortEl === sortType} onChange={() => setSortType(sortEl)} type='radio' className='w-5 h-5 cursor-pointer bg-white appearance-none rounded-full checked:bg-blue-600 checked:accent-white  border-blue-600 border' />
                <p className='font-medium'>{sortEl}</p>
            </label>
        ))}
    </div>}
    </div>
  )
}

export default Filter