import Image from 'next/image'
import Link from 'next/link'
import SustainabilityImage from '../public/assets/images/SustainabilityImage.webp'

const Sustainability = ({ src, primaryText, secondaryText }) => {
  return (
    <div style={{ fontFamily: 'DM Sans'}} className='flex flex-col gap-5'>
    <Image src={src} alt={primaryText} />
    <h5 
    className='text-2xl md:text-3xl font-medium'>{primaryText}</h5>
    <p className='text-xl'>{secondaryText}</p>
    <button className='p-4 px-10 bg-gray-50 border-2 border-purple-900 transitions hover:bg-purple-900 hover:text-gray-50 text-purple-900 font-medium w-fit'>
            <Link href='/sustainability'>
                Learn more
            </Link>
    </button> 
    </div>
  )
}

export default Sustainability