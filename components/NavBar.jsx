import Link from "next/link"
import { useRouter } from "next/router"
const NavBar = () => {
  const router = useRouter()
  return (
    <nav className='absolute bg-white z-[100] p-10 lg:p-0 lg:static font-medium tracking-wide top-[100%] left-0 right-0 flex flex-col lg:flex-row gap-2 lg:gap-6 items-end lg:items-center'>
        <p style={router.asPath.includes('shop') ? { textDecoration: 'underline'} : null} className="lg:text-lg hover:underline underline-offset-2 transitions">
            <Link href='shop'>Shop</Link>
        </p>
        <p style={router.asPath.includes('about') ? { textDecoration: 'underline'} : null} className="lg:text-lg hover:underline underline-offset-2 transitions">
            <Link href='about'>About</Link>
        </p>
        <p style={router.asPath.includes('contact') ? { textDecoration: 'underline'} : null} className="lg:text-lg hover:underline underline-offset-2 transitions">
            <Link href='contact'>Contact</Link>
        </p>
    </nav>
  )
}

export default NavBar