import Head from 'next/head'
import Image from 'next/image'
import CoverSection from '../components/CoverSection'
import OurSellers from '../components/OurSellers'
import HomeCover from '../public/assets/images/HomeCover.webp'
import DecorCover from '../public/assets/images/DecorCover.webp'
import SustainabilitySection from '../components/SustainabiltySection'
import NewsLetterSection from '../components/NewsLetter'
import InstagramSection from '../components/InstagramSection'
import HeadMeta from '../components/HeadMeta'

export default function Home() {
  return (
    <>
    <HeadMeta title='Home page' desc='Home page' />
    <main>
      <CoverSection src={HomeCover} primaryText='Handmade ceramics' secondaryText='Painted clay ceramics made with love.' />
      <OurSellers />
      <CoverSection src={DecorCover} primaryText='Home decor items' secondaryText='Find your new favorite pieces.' />
      <SustainabilitySection />
      <NewsLetterSection />
      <InstagramSection />
    </main>
    </>
  )
}
