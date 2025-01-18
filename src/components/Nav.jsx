// // 'use client'

// // import { useState, useRef, useEffect } from 'react'
// // import { ChevronDown } from 'lucide-react'
// // import { Link } from 'react-router-dom'

// // const HamburgerMenu = ({ isOpen, toggleMenu }) => (
// //   <button
// //     className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer'
// //     onClick={toggleMenu}
// //     aria-label={isOpen ? 'Close menu' : 'Open menu'}
// //   >
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? 'rotate-45 translate-y-2' : ''
// //       }`}
// //     />
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? 'opacity-0' : ''
// //       }`}
// //     />
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? '-rotate-45 -translate-y-2' : ''
// //       }`}
// //     />
// //   </button>
// // )

// // const CloseButton = ({ onClick }) => (
// //   <button
// //     className='w-8 h-8 flex items-center justify-center cursor-pointer'
// //     onClick={onClick}
// //     aria-label='Close menu'
// //   >
// //     <div className='relative w-6 h-6'>
// //       <span className='absolute w-full h-0.5 bg-gray-600 transform rotate-45' />
// //       <span className='absolute w-full h-0.5 bg-gray-600 transform -rotate-45' />
// //     </div>
// //   </button>
// // )

// // export default function Navbar() {
// //   const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
// //   const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
// //   const dropdownRef = useRef(null)

// //   const toggleSideDrawer = () => setIsSideDrawerOpen(!isSideDrawerOpen)

// //   useEffect(() => {
// //     function handleClickOutside(event) {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDestinationsOpen(false)
// //       }
// //     }

// //     document.addEventListener('mousedown', handleClickOutside)
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside)
// //     }
// //   }, [])

// //   const NavItems = ({ mobile = false }) => (
// //     <>
// //       <Link
// //         to='/'
// //         className={`${
// //           mobile ? 'block' : 'px-3'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
// //       >
// //         HOME
// //       </Link>
// //       <Link
// //         to='/about'
// //         className={`${
// //           mobile ? 'block' : 'px-3'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
// //       >
// //         ABOUT
// //       </Link>
// //       <div className={`${mobile ? 'block' : 'relative'}`} ref={dropdownRef}>
// //         <button
// //           onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
// //           onMouseEnter={() => !mobile && setIsDestinationsOpen(true)}
// //           className={`${
// //             mobile ? 'block' : 'px-3'
// //           } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none flex items-center`}
// //         >
// //           DESTINATIONS
// //           <ChevronDown className='ml-1 h-4 w-4' />
// //         </button>

// //         {isDestinationsOpen && (
// //           <div
// //             className={`${
// //               mobile ? '' : 'absolute top-full left-0'
// //             } mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10`}
// //           >
// //             <div className='py-1'>
// //               <Link
// //                 to='/destinations/kenya'
// //                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //               >
// //                 Kenya
// //               </Link>
// //               <Link
// //                 to='/destinations/tanzania'
// //                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //               >
// //                 Tanzania
// //               </Link>
// //               <Link
// //                 to='/destinations/uganda'
// //                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //               >
// //                 Uganda
// //               </Link>
// //               <Link
// //                 to='/destinations/rwanda'
// //                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //               >
// //                 Rwanda
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       <Link
// //         to='/car-hire'
// //         className={`${
// //           mobile ? 'block' : 'px-3'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
// //       >
// //         CAR HIRE
// //       </Link>
// //       <Link
// //         to='/contact'
// //         className={`${
// //           mobile ? 'block' : 'px-3'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
// //       >
// //         CONTACT
// //       </Link>
// //     </>
// //   )

// //   return (
// //     <nav className='w-full border-b border-gray-200'>
// //       <div className='max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between'>
// //         {/* Logo */}
// //         <div
// //           className={`flex items-center ${
// //             isSideDrawerOpen ? 'lg:flex hidden' : ''
// //           }`}
// //         >
// //           <Link to='/' className='text-xl font-bold text-gray-900'>
// //             Divine African Tours
// //           </Link>
// //         </div>

// //         {/* Navigation Items - Desktop */}
// //         <div className='hidden lg:flex items-center gap-8'>
// //           <NavItems />
// //         </div>

// //         {/* Book Online Button - Desktop */}
// //         <div className='hidden lg:flex items-center gap-4'>
// //           <a
// //             href='https://example.com/book-online'
// //             target='_blank'
// //             rel='noopener noreferrer'
// //             className='px-4 py-2 text-sm font-medium text-black bg-transparent border border-[#2ba924] rounded-md hover:bg-[#2ba924]/10 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors'
// //           >
// //             Book Online
// //           </a>
// //         </div>

// //         {/* Hamburger Menu - Mobile */}
// //         <HamburgerMenu
// //           isOpen={isSideDrawerOpen}
// //           toggleMenu={toggleSideDrawer}
// //         />

// //         {/* Side Drawer - Mobile */}
// //         <div
// //           className={`fixed inset-y-0 left-0 right-0 z-50 bg-white shadow-lg transform ${
// //             isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
// //           } transition-transform duration-300 ease-in-out lg:hidden`}
// //         >
// //           <div className='p-4'>
// //             <div className='flex justify-between items-center'>
// //               <Link to='/' className='text-xl font-bold text-gray-900'>
// //                 Divine African Tours
// //               </Link>
// //               <CloseButton onClick={toggleSideDrawer} />
// //             </div>
// //             <div className='mt-8 flex flex-col space-y-4'>
// //               <NavItems mobile />
// //               <a
// //                 href='https://example.com/book-online'
// //                 target='_blank'
// //                 rel='noopener noreferrer'
// //                 className='mt-8 px-4 py-2 text-sm font-medium text-white bg-[#2ba924] border border-[#2ba924] rounded-md hover:bg-[#2ba924]/90 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors inline-block w-auto'
// //               >
// //                 Book Online
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }
// 'use client'

// // import { useState, useEffect } from 'react'
// // import { Link, useLocation } from 'react-router-dom'

// // const HamburgerMenu = ({ isOpen, toggleMenu }) => (
// //   <button
// //     className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer'
// //     onClick={toggleMenu}
// //     aria-label={isOpen ? 'Close menu' : 'Open menu'}
// //   >
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? 'rotate-45 translate-y-2' : ''
// //       }`}
// //     />
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? 'opacity-0' : ''
// //       }`}
// //     />
// //     <span
// //       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
// //         isOpen ? '-rotate-45 -translate-y-2' : ''
// //       }`}
// //     />
// //   </button>
// // )

// // const CloseButton = ({ onClick, className }) => (
// //   <button
// //     className={`w-8 h-8 flex items-center justify-center cursor-pointer ${className}`}
// //     onClick={onClick}
// //     aria-label='Close menu'
// //   >
// //     <div className='relative w-6 h-6'>
// //       <span className='absolute w-full h-0.5 bg-gray-600 transform rotate-45' />
// //       <span className='absolute w-full h-0.5 bg-gray-600 transform -rotate-45' />
// //     </div>
// //   </button>
// // )

// // export default function Navbar() {
// //   const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
// //   const location = useLocation()

// //   const scrollToTours = (e) => {
// //     e.preventDefault()
// //     const toursSection = document.getElementById('tours-section')
// //     if (toursSection) {
// //       toursSection.scrollIntoView({ behavior: 'smooth' })
// //     }
// //     setIsSideDrawerOpen(false)
// //   }

// //   const NavItems = ({ mobile = false }) => (
// //     <>
// //       <Link
// //         to='/'
// //         className={`${
// //           mobile ? 'block w-full' : 'px-3 inline-block'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
// //           location.pathname === '/'
// //             ? 'underline decoration-[#2ba924] decoration-2'
// //             : ''
// //         }`}
// //       >
// //         HOME
// //       </Link>
// //       <Link
// //         to='/about'
// //         className={`${
// //           mobile ? 'block w-full' : 'px-3 inline-block'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
// //           location.pathname === '/about'
// //             ? 'underline decoration-[#2ba924] decoration-2'
// //             : ''
// //         }`}
// //       >
// //         ABOUT
// //       </Link>
// //       <button
// //         onClick={scrollToTours}
// //         className={`${
// //           mobile ? 'block w-full text-left' : 'px-3 inline-block'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
// //       >
// //         DESTINATIONS
// //       </button>
// //       <Link
// //         to='/car-hire'
// //         className={`${
// //           mobile ? 'block w-full' : 'px-3 inline-block'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
// //           location.pathname === '/car-hire'
// //             ? 'underline decoration-[#2ba924] decoration-2'
// //             : ''
// //         }`}
// //       >
// //         CAR HIRE
// //       </Link>
// //       <Link
// //         to='/contact'
// //         className={`${
// //           mobile ? 'block w-full' : 'px-3 inline-block'
// //         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
// //           location.pathname === '/contact'
// //             ? 'underline decoration-[#2ba924] decoration-2'
// //             : ''
// //         }`}
// //       >
// //         CONTACT
// //       </Link>
// //     </>
// //   )

// //   const toggleSideDrawer = () => {
// //     setIsSideDrawerOpen(!isSideDrawerOpen)
// //   }

// //   return (
// //     <nav className='w-full border-b border-gray-200'>
// //       <div className='max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between'>
// //         {/* Logo */}
// //         <div
// //           className={`flex items-center ${
// //             isSideDrawerOpen ? 'lg:flex hidden' : ''
// //           }`}
// //         >
// //           <Link to='/' className='text-xl font-bold text-gray-900'>
// //             Divine African Tours
// //           </Link>
// //         </div>

// //         {/* Navigation Items - Desktop */}
// //         <div className='hidden lg:flex items-center gap-8'>
// //           <NavItems />
// //         </div>

// //         {/* Book Online Button - Desktop */}
// //         <div className='hidden lg:flex items-center gap-4'>
// //           <a
// //             href='https://example.com/book-online'
// //             target='_blank'
// //             rel='noopener noreferrer'
// //             className='px-4 py-2 text-sm font-medium text-black bg-transparent border border-[#2ba924] rounded-md hover:bg-[#2ba924]/10 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors'
// //           >
// //             Book Online
// //           </a>
// //         </div>

// //         {/* Hamburger Menu - Mobile */}
// //         <HamburgerMenu
// //           isOpen={isSideDrawerOpen}
// //           toggleMenu={toggleSideDrawer}
// //         />

// //         {/* Side Drawer - Mobile */}
// //         <div
// //           className={`fixed inset-y-0 left-0 right-0 z-50 bg-white shadow-lg transform ${
// //             isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
// //           } transition-transform duration-300 ease-in-out lg:hidden`}
// //         >
// //           <div className='p-4 relative'>
// //             <div className='flex justify-between items-center'>
// //               <Link to='/' className='text-xl font-bold text-gray-900'>
// //                 Divine African Tours
// //               </Link>
// //               <CloseButton
// //                 onClick={toggleSideDrawer}
// //                 className='absolute top-6 right-6'
// //               />
// //             </div>
// //             <div className='mt-8 flex flex-col space-y-4'>
// //               <NavItems mobile />
// //               <a
// //                 href='https://example.com/book-online'
// //                 target='_blank'
// //                 rel='noopener noreferrer'
// //                 className='mt-8 px-4 py-2 text-sm font-medium text-white bg-[#2ba924] border border-[#2ba924] rounded-md hover:bg-[#2ba924]/90 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors inline-block w-full text-center'
// //               >
// //                 Book Online
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }

// //new
// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const HamburgerMenu = ({ isOpen, toggleMenu }) => (
//   <button
//     className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer'
//     onClick={toggleMenu}
//     aria-label={isOpen ? 'Close menu' : 'Open menu'}
//   >
//     <span
//       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
//         isOpen ? 'rotate-45 translate-y-2' : ''
//       }`}
//     />
//     <span
//       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
//         isOpen ? 'opacity-0' : ''
//       }`}
//     />
//     <span
//       className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
//         isOpen ? '-rotate-45 -translate-y-2' : ''
//       }`}
//     />
//   </button>
// )

// const CloseButton = ({ onClick, className }) => (
//   <button
//     className={`w-8 h-8 flex items-center justify-center cursor-pointer ${className}`}
//     onClick={onClick}
//     aria-label='Close menu'
//   >
//     <div className='relative w-6 h-6'>
//       <span className='absolute w-full h-0.5 bg-gray-600 transform rotate-45' />
//       <span className='absolute w-full h-0.5 bg-gray-600 transform -rotate-45' />
//     </div>
//   </button>
// )

// export default function Navbar() {
//   const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
//   const location = useLocation()

//   const scrollToTours = (e) => {
//     e.preventDefault()
//     const toursSection = document.getElementById('tours-section')
//     if (toursSection) {
//       toursSection.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   const NavItems = ({ mobile = false, onItemClick }) => (
//     <>
//       <Link
//         to='/'
//         className={`${
//           mobile ? 'block w-full' : 'px-3 inline-block'
//         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
//           location.pathname === '/'
//             ? 'underline decoration-[#2ba924] decoration-2'
//             : ''
//         }`}
//         onClick={mobile ? onItemClick : undefined}
//       >
//         HOME
//       </Link>
//       <Link
//         to='/about'
//         className={`${
//           mobile ? 'block w-full' : 'px-3 inline-block'
//         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
//           location.pathname === '/about'
//             ? 'underline decoration-[#2ba924] decoration-2'
//             : ''
//         }`}
//         onClick={mobile ? onItemClick : undefined}
//       >
//         ABOUT
//       </Link>
//       <button
//         onClick={(e) => {
//           scrollToTours(e)
//           if (mobile) onItemClick()
//         }}
//         className={`${
//           mobile ? 'block w-full text-left' : 'px-3 inline-block'
//         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none`}
//       >
//         DESTINATIONS
//       </button>
//       <Link
//         to='/car-hire'
//         className={`${
//           mobile ? 'block w-full' : 'px-3 inline-block'
//         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
//           location.pathname === '/car-hire'
//             ? 'underline decoration-[#2ba924] decoration-2'
//             : ''
//         }`}
//         onClick={mobile ? onItemClick : undefined}
//       >
//         CAR HIRE
//       </Link>
//       <Link
//         to='/contact'
//         className={`${
//           mobile ? 'block w-full' : 'px-3 inline-block'
//         } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
//           location.pathname === '/contact'
//             ? 'underline decoration-[#2ba924] decoration-2'
//             : ''
//         }`}
//         onClick={mobile ? onItemClick : undefined}
//       >
//         CONTACT
//       </Link>
//     </>
//   )

//   const toggleSideDrawer = () => {
//     setIsSideDrawerOpen(!isSideDrawerOpen)
//   }

//   return (
//     <nav className='w-full border-b border-gray-200'>
//       <div className='max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between'>
//         {/* Logo */}
//         <div
//           className={`flex items-center ${
//             isSideDrawerOpen ? 'lg:flex hidden' : ''
//           }`}
//         >
//           <Link to='/' className='text-xl font-bold text-gray-900'>
//             Divine African Tours
//           </Link>
//         </div>

//         {/* Navigation Items - Desktop */}
//         <div className='hidden lg:flex items-center gap-8'>
//           <NavItems />
//         </div>

//         {/* Book Online Button - Desktop */}
//         <div className='hidden lg:flex items-center gap-4'>
//           <a
//             href='https://example.com/book-online'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='px-4 py-2 text-sm font-medium text-black bg-transparent border border-[#2ba924] rounded-md hover:bg-[#2ba924]/10 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors'
//           >
//             Book Online
//           </a>
//         </div>

//         {/* Hamburger Menu - Mobile */}
//         <HamburgerMenu
//           isOpen={isSideDrawerOpen}
//           toggleMenu={toggleSideDrawer}
//         />

//         {/* Side Drawer - Mobile */}
//         <div
//           className={`fixed inset-y-0 left-0 right-0 z-50 bg-white shadow-lg transform ${
//             isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out lg:hidden`}
//         >
//           <div className='p-4 relative'>
//             <div className='flex justify-between items-center'>
//               <Link to='/' className='text-xl font-bold text-gray-900'>
//                 Divine African Tours
//               </Link>
//               <CloseButton
//                 onClick={toggleSideDrawer}
//                 className='absolute top-6 right-6'
//               />
//             </div>
//             <div className='mt-8 flex flex-col space-y-4'>
//               <NavItems mobile onItemClick={toggleSideDrawer} />
//               <a
//                 href='https://example.com/book-online'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='mt-8 px-4 py-2 text-sm font-medium text-white bg-[#2ba924] border border-[#2ba924] rounded-md hover:bg-[#2ba924]/90 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors inline-block w-full text-center'
//                 onClick={toggleSideDrawer}
//               >
//                 Book Online
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <button
    className='lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer'
    onClick={toggleMenu}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <span
      className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
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
      <span className='absolute w-full h-0.5 bg-gray-600 transform rotate-45' />
      <span className='absolute w-full h-0.5 bg-gray-600 transform -rotate-45' />
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
        } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
          location.pathname === '/'
            ? 'underline decoration-[#2ba924] decoration-2'
            : ''
        }`}
        onClick={mobile ? onItemClick : undefined}
      >
        HOME
      </Link>
      <Link
        to='/about'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
          location.pathname === '/about'
            ? 'underline decoration-[#2ba924] decoration-2'
            : ''
        }`}
        onClick={mobile ? onItemClick : undefined}
      >
        ABOUT
      </Link>
      <Link
        to='/destinations'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
          location.pathname === '/six'
            ? 'underline decoration-[#2ba924] decoration-2'
            : ''
        }`}
        onClick={mobile ? onItemClick : undefined}
      >
        DESTINATIONS
      </Link>
      <Link
        to='/car-hire'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
          location.pathname === '/car-hire'
            ? 'underline decoration-[#2ba924] decoration-2'
            : ''
        }`}
        onClick={mobile ? onItemClick : undefined}
      >
        CAR HIRE
      </Link>
      <Link
        to='/contact'
        className={`${
          mobile ? 'block w-full' : 'px-3 inline-block'
        } py-2 text-sm font-medium text-black hover:text-gray-900 focus:outline-none ${
          location.pathname === '/contact'
            ? 'underline decoration-[#2ba924] decoration-2'
            : ''
        }`}
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
    <nav className='w-full border-b border-gray-200'>
      <div className='max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div
          className={`flex items-center ${
            isSideDrawerOpen ? 'lg:flex hidden' : ''
          }`}
        >
          <Link to='/' className='text-xl font-bold text-gray-900'>
            DIVINE AFRICAN TOURS
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
            className='px-4 py-2 text-sm font-medium text-black bg-transparent border border-[#2ba924] rounded-md hover:bg-[#2ba924]/10 focus:outline-none focus:ring-2 focus:ring-[#2ba924] focus:ring-offset-2 transition-colors'
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
          className={`fixed inset-y-0 left-0 right-0 z-50 bg-white shadow-lg transform ${
            isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className='p-4 relative'>
            <div className='flex justify-between items-center'>
              <Link to='/' className='text-xl font-bold text-gray-900'>
                DIVINE AFRICAN TOURS
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
