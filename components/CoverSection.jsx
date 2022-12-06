import Image from 'next/image'
import Container from './Container'

const CoverSection = ({src, primaryText, secondaryText, btn = true,height }) => {
  return (
    <section style={height && { height }} className='relative h-[700px]'>
        <div className='absolute inset-0 z-[-1]'>
            <Image src={src} alt={primaryText} className='!w-full !h-full bg-cover' />
        </div>
        <Container className='flex items-center justify-center gap-5 lg:gap-8 flex-col z-10 h-full text-white'>
            <h1 className='text-center text-6xl lg:text-8xl'>{primaryText}</h1>
            <p className='text-lg lg:text-xl'>{secondaryText}</p>
            {btn && <button className='bg-gray-50 hover:bg-gray-200 text-lg text-black transitions p-4 px-10'>Shop now</button>}
        </Container>
    </section>
  )
}

export default CoverSection