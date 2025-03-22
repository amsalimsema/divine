import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
//import Logo from '../assets/divine-footer-logo.png'
import Logo from '../assets/divine_one.png'

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <button
    className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer'
    onClick={toggleMenu}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <span
      className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    />
  </button>
)

const CloseButton = ({ onClick, className }) => (
  <button
    className={`w-8 h-8 flex items-center justify-center cursor-pointer ${className}`}
    onClick={onClick}
    aria-label='Close menu'
  >
    <div className='relative w-6 h-6'>
      <span className='absolute w-full h-0.5 bg-white transform rotate-45' />
      <span className='absolute w-full h-0.5 bg-white transform -rotate-45' />
    </div>
  </button>
)

export default function Navbar() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
  const location = useLocation()

  const scrollToTours = (e) => {
    e.preventDefault()
    const toursSection = document.getElementById('tours-section')
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const NavItems = ({ mobile = false, onItemClick }) => (
    <>
      <Link
        to='/'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium ${
          location.pathname === '/' ? 'text-[#2ba924]' : 'text-white'
        } hover:text-[#2ba924] focus:outline-none`}
        onClick={mobile ? onItemClick : undefined}
      >
        HOME
      </Link>
      <Link
        to='/about'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium ${
          location.pathname === '/about' ? 'text-[#2ba924]' : 'text-white'
        } hover:text-[#2ba924] focus:outline-none`}
        onClick={mobile ? onItemClick : undefined}
      >
        ABOUT
      </Link>
      <Link
        to='/destinations'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium ${
          location.pathname === '/destinations'
            ? 'text-[#2ba924]'
            : 'text-white'
        } hover:text-[#2ba924] focus:outline-none`}
        onClick={mobile ? onItemClick : undefined}
      >
        DESTINATIONS
      </Link>
      <Link
        to='/car-hire'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium ${
          location.pathname === '/car-hire' ? 'text-[#2ba924]' : 'text-white'
        } hover:text-[#2ba924] focus:outline-none`}
        onClick={mobile ? onItemClick : undefined}
      >
        CAR HIRE
      </Link>
      <Link
        to='/contact'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium ${
          location.pathname === '/contact' ? 'text-[#2ba924]' : 'text-white'
        } hover:text-[#2ba924] focus:outline-none`}
        onClick={mobile ? onItemClick : undefined}
      >
        CONTACT
      </Link>
    </>
  )

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  }

  return (
    <nav className='w-full border-b border-transparent bg-black'>
      <div className='max-w-[1600px] mx-auto px-2 h-20 flex items-center justify-between'>
        {/* Logo */}
        <div
          className={`flex items-center ${
            isSideDrawerOpen ? 'lg:flex hidden' : ''
          }`}
        >
          <Link to='/' className='text-xl font-bold text-gray-900'>
            <img
              src={Logo || '/placeholder.svg'}
              alt='Divine African Tours Logo'
              // className='h-auto w-30'
            />
          </Link>
        </div>

        {/* Navigation Items - Desktop */}
        <div className='hidden lg:flex items-center gap-8'>
          <NavItems />
        </div>

        {/* Book Online Button - Desktop */}
        <div className='hidden lg:flex items-center gap-4'>
          <a
            href='https://payments.pesapal.com/divineafricantours'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 text-sm font-medium text-white bg-transparent border border-[#2ba924] rounded-md hover:bg-[#2ba924]/10 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors'
          >
            Book Online
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <HamburgerMenu
          isOpen={isSideDrawerOpen}
          toggleMenu={toggleSideDrawer}
        />

        {/* Side Drawer - Mobile */}
        <div
          className={`fixed inset-y-0 left-0 right-0 z-50 bg-black shadow-lg transform ${
            isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className='p-4 relative'>
            <div className='flex justify-between items-center'>
              <Link to='/' className='text-xl font-bold text-white'>
                <img
                  src={Logo || '/placeholder.svg'}
                  alt='Divine African Tours Logo'
                  // className='h-auto w-30'
                />
              </Link>
              <CloseButton
                onClick={toggleSideDrawer}
                className='absolute top-6 right-6'
              />
            </div>
            <div className='mt-8 flex flex-col space-y-4'>
              <NavItems mobile onItemClick={toggleSideDrawer} />
              <a
                href='https://payments.pesapal.com/divineafricantours'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 px-4 py-2 text-sm font-medium text-white bg-[#2ba924] border border-[#2ba924] rounded-md hover:bg-[#2ba924]/90 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors inline-block w-full text-center'
                onClick={toggleSideDrawer}
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
