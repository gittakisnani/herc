import Image from 'next/image';
import Link from 'next/link';


const Product = ({ zoom = false, shop = false, src, title, price, id}) => {
  return (
    <div className='flex flex-col gap-4 mx-auto'>
        <Link href={`/shop/${id}`}>
          <div className='overflow-hidden'>
          <Image className={zoom ? 'transitions hover:scale-[1.1]' : ''} src={src} alt={title} />
          </div>
          <div style={!shop ? { gap: '24px'} : null} className='flex flex-col text-center'>
              <h5 
              style={{ fontFamily: 'DM Sans'}}
              className={shop ? 'text-2xl' :'text-2xl lg:text-3xl font-medium'}>{title}</h5>
              <p className={shop ? 'text-2xl font-semibold' : 'text-xl'}>${price}</p>
          </div>
        </Link>
    </div>
  )
}

export default Product