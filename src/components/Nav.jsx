import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

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

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about/our-story' },
        { name: 'Team', href: '/about/team' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Vision', href: '/about/vision' },
      ],
    },
    {
      name: 'Destinations',
      href: '/destinations',
      dropdown: [
        { name: 'Kenya', href: '/destinations/kenya' },
        { name: 'Tanzania', href: '/destinations/tanzania' },
        { name: 'Uganda', href: '/destinations/uganda' },
        { name: 'Rwanda', href: '/destinations/rwanda' },
      ],
    },
    {
      name: 'Tours',
      href: '/tours',
      dropdown: [
        { name: 'Safari Tours', href: '/tours/safari' },
        { name: 'Cultural Tours', href: '/tours/cultural' },
        { name: 'Adventure Tours', href: '/tours/adventure' },
        { name: 'Photography Tours', href: '/tours/photography' },
      ],
    },
    {
      name: 'Car Hire',
      href: '/car-hire',
      dropdown: [
        { name: '4x4 Vehicles', href: '/car-hire/4x4' },
        { name: 'Luxury Cars', href: '/car-hire/luxury' },
        { name: 'Vans', href: '/car-hire/vans' },
        { name: 'Motorcycles', href: '/car-hire/motorcycles' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className='bg-[#4CAF50]/70 backdrop-blur-lg text-white fixed top-0 left-0 right-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
            <div className='hidden md:block flex-grow'>
              <div className='flex justify-end items-baseline space-x-4'>
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
            </div>
            <div className='flex md:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none'
                aria-controls='mobile-menu'
                aria-expanded={isOpen}
              >
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                  <X className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Menu className='block h-6 w-6' aria-hidden='true' />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className='md:hidden fixed inset-0 bg-green-800  z-50 overflow-y-auto'
            id='mobile-menu'
          >
            <div className='px-4 pt-2 pb-3 space-y-1 sm:px-3'>
              <div className='flex items-center justify-between mb-4'>
                <Link to='/'>
                  <img
                    className='h-10 w-auto'
                    src='https://cdn-icons-png.flaticon.com/128/281/281764.png'
                    alt='Divine African Tours Logo'
                  />
                </Link>
                <button
                  onClick={closeMenu}
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none'
                >
                  <span className='sr-only'>Close main menu</span>
                  <X className='block h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              {menuItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={(e) =>
                      item.dropdown ? toggleDropdown(index, e) : closeMenu()
                    }
                    className='w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-20 flex items-center justify-between'
                  >
                    <Link to={item.href} onClick={closeMenu}>
                      {item.name}
                    </Link>
                    {item.dropdown && <ChevronDown className='ml-1 h-4 w-4' />}
                  </button>
                  {item.dropdown && activeDropdown === index && (
                    <div className='pl-4'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className='block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:bg-opacity-20'
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
