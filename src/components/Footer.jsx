import { MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import PesaPal from '../assets/pesapal.png'
import TripAdvisor from '../assets/TripAdvisor.png'
import UWA from '../assets/uwa.jpg'
import UTB from '../assets/utb.png'
import Logo from '../assets/divine_one.png'
//import Logo from '../assets/divine-footer-logo.png'

export default function Footer() {
  return (
    <footer className='bg-black py-16 text-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left'>
          {/* Company Logo and Memberships */}
          <div className='col-span-2 lg:col-span-1'>
            <div className='flex flex-col items-start'>
              <img
                src={Logo}
                alt='Divine African Tours Logo'
                className='h-auto w-30 mb-4'
              />
              <h3 className='text-sm font-medium mb-2 text-white'>
                Memberships
              </h3>
              <a
                href='https://www.tripadvisor.com/Attraction_Review-g293841-d20411656-Reviews-Divine_African_Tours-Kampala_Central_Region.html'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={TripAdvisor}
                  alt='TripAdvisor'
                  className='h-10 w-auto rounded-md mb-2'
                />
              </a>
              <div className='flex items-center space-x-4'>
                <img src={UWA} alt='UWA' className='h-auto w-16 rounded-md' />
                <img
                  src={UTB}
                  alt='Uganda Tourism Board'
                  className='h-16 w-16 rounded-md'
                />
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='col-span-1 flex flex-col items-start'>
            <h2 className='text-white font-medium mb-4'>Quick Links</h2>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link to='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/car-hire' className='hover:underline'>
                  Car Hire
                </Link>
              </li>
              <li>
                <Link to='/destinations' className='hover:underline'>
                  Tours
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:underline'>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className='col-span-1 flex flex-col items-start'>
            <h2 className='text-white font-medium mb-4'>Social</h2>
            <ul className='space-y-3 flex flex-col items-start text-sm'>
              <li>
                <a
                  href='https://x.com/holidays_divine'
                  className='flex items-center hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/divineafricanholidays/'
                  className='flex items-center hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/divineafrican.ug'
                  className='flex items-center hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className='col-span-2 lg:col-span-1 flex flex-col items-start'>
            <h2 className='text-white font-medium mb-4'>Offices</h2>
            <ul className='space-y-3 flex flex-col items-start text-sm'>
              <li className='flex items-center text-sm gap-2'>
                <MapPin className='h-4 w-4 mt-1 flex-shrink-0' />
                <div>
                  Plot 30, Lumumba Avenue
                  <br />
                  PO.BOX: 129920, Kampala
                </div>
              </li>
              <li className='flex items-center'>
                <div className='flex items-center gap-2'>
                  <Phone className='h-4 w-4 mt-1 flex-shrink-0' />
                  <div>
                    <a
                      href='tel:+256759650705'
                      className='hover:underline block'
                    >
                      +256 759 650705
                    </a>
                    <a
                      href='tel:+256776927456'
                      className='hover:underline block'
                    >
                      +256 776 927456
                    </a>
                    <a
                      href='tel:+256775650705'
                      className='hover:underline block'
                    >
                      +256 775 650705
                    </a>
                  </div>
                </div>
              </li>
              <li className='flex items-center'>
                <a
                  href='mailto:info@divineafricantours.com'
                  className='hover:underline flex items-center gap-2'
                >
                  <Mail className='h-4 w-4 flex-shrink-0' />
                  info@divineafricantours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center'>
          {/* Payment Icons */}
          <div className='w-full mb-8'>
            <div className='flex items-center justify-center space-x-4'>
              <a
                href='https://payments.pesapal.com/divineafricantours'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://cdn-icons-png.flaticon.com/128/349/349221.png'
                  alt='Visa'
                  className='h-10 w-auto'
                />
              </a>
              <a
                href='https://payments.pesapal.com/divineafricantours'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://cdn-icons-png.flaticon.com/128/349/349230.png'
                  alt='Visa'
                  className='h-10 w-auto'
                />
              </a>
              <a
                href='https://payments.pesapal.com/divineafricantours'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={PesaPal} alt='Pesapal' className='h-8 w-auto' />
              </a>
            </div>
          </div>

          <div className='text-center'>
            <span className='text-sm text-white'>
              © {new Date().getFullYear()} Divine African Tours
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
