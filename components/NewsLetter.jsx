import Image from "next/image"
import NewsLetter from '../public/assets/images/NewsLetter.webp'
import Container from "./Container"
const NewsLetterSection = () => {
  return (
    <section className="relative h-[500px]">
        <div className="absolute inset-0 z-[-1]">
            <Image src={NewsLetter} alt='News Letter' className="h-full w-full bg-cover" />
        </div>
        <Container className='flex items-center justify-center gap-5 lg:gap-8 flex-col z-10 h-full text-white'>
            <h1 className='text-center text-4xl lg:text-6xl'>Sign-up for our newsletter</h1>
            <input type="email" placeholder="Your email address" className="w-full max-w-[400px] p-3 bg-gray-200/90 outline-none" />
            <button className='bg-gray-50 hover:bg-gray-100 text-lg text-black transitions p-4 px-10'>Submit</button>
        </Container>
    </section>
  )
}

export default NewsLetterSection