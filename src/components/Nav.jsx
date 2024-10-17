import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, ExternalLink } from 'lucide-react'

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (index, event) => {
    event.stopPropagation()
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  const menuItems = [
    { name: 'HOME', href: '/' },
    {
      name: 'ABOUT',
      href: '/about',
    },
    {
      name: 'DESTINATIONS',
      href: '/destinations',
      dropdown: [
        { name: 'Kenya', href: '/destinations/kenya' },
        { name: 'Tanzania', href: '/destinations/tanzania' },
        { name: 'Uganda', href: '/destinations/uganda' },
        { name: 'Rwanda', href: '/destinations/rwanda' },
      ],
    },
    {
      name: 'TOURS',
      href: '/tours',
      dropdown: [
        { name: 'Safari Tours', href: '/tours/safari' },
        { name: 'Cultural Tours', href: '/tours/cultural' },
        { name: 'Adventure Tours', href: '/tours/adventure' },
        { name: 'Photography Tours', href: '/tours/photography' },
      ],
    },
    {
      name: 'CAR HIRE',
      href: '/car-hire',
    },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <>
      <nav
        className={`bg-black/40 backdrop-blur-lg text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Contact information bar */}
          <div className='hidden md:flex justify-between items-center py-2 text-sm'>
            <div className='flex items-center space-x-4'>
              <a
                href='tel:+256759650705'
                className='flex items-center hover:text-gray-200'
              >
                <Phone className='w-4 h-4 mr-1' />
                +256 759 650705
              </a>
              <a
                href='mailto:info@divineafricantours.com'
                className='flex items-center hover:text-gray-200'
              >
                <Mail className='w-4 h-4 mr-1' />
                info@divineafricantours.com
              </a>
            </div>
            <a
              href='https://booking.divineafricantours.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center px-4 py-1 bg-white text-green-700 rounded-full font-semibold hover:bg-green-100 transition-colors duration-300'
            >
              Book Online
              <ExternalLink className='w-4 h-4 ml-1' />
            </a>
          </div>
          <div className='flex items-center justify-between h-16'>
            <div className='flex-shrink-0'>
              <Link to='/'>
                <img
                  className='h-10 w-auto'
                  src='https://cdn-icons-png.flaticon.com/128/281/281764.png'
                  alt='Divine African Tours Logo'
                />
              </Link>
            </div>
            <div className='hidden md:flex flex-grow items-center justify-end'>
              <div className='flex items-baseline space-x-4'>
                {menuItems.map((item, index) => (
                  <div key={item.name} className='relative'>
                    <button
                      onClick={(e) =>
                        item.dropdown ? toggleDropdown(index, e) : null
                      }
                      className='px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:bg-opacity-20 flex items-center'
                    >
                      <Link to={item.href}>{item.name}</Link>
                      {item.dropdown && (
                        <ChevronDown className='ml-1 h-4 w-4' />
                      )}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <div className='absolute left-0 mt-2 w-48 rounded-md bg-white/30 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50'>
                        <div
                          className='py-1'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='options-menu'
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className='block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-900'
                              role='menuitem'
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link
                to='/enquire'
                className='ml-4 px-4 py-2 rounded-md text-sm font-medium bg-amber-600 text-white hover:bg-green-800 transition-colors duration-300'
              >
                Enquire Now
              </Link>
            </div>
            <div className='flex items-center md:hidden'>
              <Link
                to='/enquire'
                className='mr-2 px-4 py-2 rounded-md text-sm font-medium bg-amber-600 text-white hover:bg-green-800 transition-colors duration-300'
              >
                Enquire Now
              </Link>
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none'
                aria-controls='mobile-menu'
                aria-expanded={isOpen}
              >
                <span className='sr-only'>
                  {isOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {isOpen ? (
                  <X className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Menu className='block h-6 w-6' aria-hidden='true' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          <div
            className='fixed inset-0 bg-black bg-opacity-25'
            aria-hidden='true'
            onClick={closeMenu}
          ></div>
          <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-green-800 overflow-y-auto'>
            <div className='flex items-center justify-between mb-8'>
              <Link to='/' className='mr-8 flex-shrink-0' onClick={closeMenu}>
                <img
                  className='h-10 w-auto'
                  src='https://cdn-icons-png.flaticon.com/128/281/281764.png'
                  alt='Divine African Tours Logo'
                />
              </Link>
            </div>
            <div className='mt-6'>
              <div className='space-y-1'>
                {menuItems.map((item, index) => (
                  <div key={item.name}>
                    <button
                      onClick={(e) =>
                        item.dropdown ? toggleDropdown(index, e) : closeMenu()
                      }
                      className='w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-between'
                    >
                      <Link to={item.href} onClick={closeMenu}>
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <ChevronDown className='ml-1 h-4 w-4' />
                      )}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <div className='pl-4 mt-2 space-y-2'>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className='block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:bg-opacity-10'
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to='/enquire'
                  className='block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-green-800 hover:bg-yellow-300 transition-colors duration-300'
                  onClick={closeMenu}
                >
                  Enquire
                </Link>

                <a
                  href='https://booking.divineafricantours.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-white text-green-700 hover:bg-green-100 transition-colors duration-300'
                  onClick={closeMenu}
                >
                  Book Online
                  <ExternalLink className='inline-block w-4 h-4 ml-1' />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
