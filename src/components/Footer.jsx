import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PesaPal from '../assets/pesapal.png'

export default function Footer() {
  return (
    <footer className='bg-amber-100 text-gray-900 py-12 '>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
          <div>
            <div className='mb-4'>
              <img
                src='https://cdn-icons-png.flaticon.com/128/281/281764.png'
                alt='Divine Tours'
                // width={150}
                // height={10}
                className='w-auto h-10'
              />
            </div>
            <h3 className='text-xl font-bold mb-4'>Divine African Tours</h3>
            <p className='mb-4'>
              Discover the beauty and wonder of Africa with our expertly curated
              tours and unforgettable experiences.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-700'
              >
                <Facebook size={24} />
                <span className='sr-only'>Facebook</span>
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-700'
              >
                <Instagram size={24} />
                <span className='sr-only'>Instagram</span>
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-700'
              >
                <Twitter size={24} />
                <span className='sr-only'>Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4 pb-2 relative'>
              <span className='relative'>
                Contact Us
                <span className='absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-500'></span>
              </span>
            </h4>
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <MapPin size={18} className='mr-2 mt-1 flex-shrink-0' />
                <span>
                  Plot 30, Lumumba Avenue.
                  <br />
                  PO.BOX: 129920, Kampala
                </span>
              </li>
              <li className='flex items-center'>
                <Phone size={18} className='mr-2 flex-shrink-0' />
                <span>
                  <a href='tel:+256759650705' className='hover:text-yellow-500'>
                    +256 759 650705
                  </a>
                  <br />
                  <a href='tel:+256775650705' className='hover:text-yellow-500'>
                    +256 775 650705
                  </a>
                </span>
              </li>
              <li className='flex items-center'>
                <Mail size={18} className='mr-2 flex-shrink-0' />
                <a
                  href='mailto:info@divineafricantours.com'
                  className='hover:text-yellow-500'
                >
                  info@divineafricantours.com
                </a>
              </li>
              <li className='flex items-start mt-4'>
                <Clock size={18} className='mr-2 mt-1 flex-shrink-0' />
                <span>
                  Office Hours:
                  <br />
                  <span className='text-gray-800 font-semibold'>Mon - Fri</span>
                  <br />
                  <span className='text-gray-800 font-semibold'>
                    08:00 AM - 05:00 PM
                  </span>
                  <br />
                  <span className='text-xs'>
                    (Let's plan your African adventure!)
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4 pb-2 relative'>
              <span className='relative'>
                Why book with us?
                <span className='absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-500'></span>
              </span>
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/who-we-are' className='hover:text-gray-500'>
                  Who we are
                </Link>
              </li>
              <li>
                <Link to='/highlights' className='hover:text-gray-500'>
                  Highlights
                </Link>
              </li>
              <li>
                <Link
                  to='/terms-and-conditions'
                  className='hover:text-gray-500'
                >
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='hover:text-gray-500'>
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4 pb-2 relative'>
              <span className='relative'>
                Quick Links
                <span className='absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-500'></span>
              </span>
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-gray-500'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-gray-500'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/tours' className='hover:text-gray-500'>
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to='/destinations' className='hover:text-gray-500'>
                  Destinations
                </Link>
              </li>
              <li>
                <Link to='/blog' className='hover:text-gray-500'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-gray-500'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-300'>
          <div className='flex justify-center mb-4'>
            <a
              href='https://payments.pesapal.com/divineafricantours'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 hover:text-white'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/128/5968/5968397.png'
                alt='Visa'
                className='w-12'
              />
            </a>
            <a
              href='https://payments.pesapal.com/divineafricantours'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/128/15398/15398050.png'
                alt='Mastercard'
                className='w-12'
              />
            </a>
            <a
              href='https://payments.pesapal.com/divineafricantours'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/128/349/349230.png'
                alt='Discover'
                className='w-12'
              />
            </a>
            <a
              href='https://payments.pesapal.com/divineafricantours'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/128/196/196539.png'
                alt='American Express'
                className='w-12'
              />
            </a>
            <a
              href='https://payments.pesapal.com/divineafricantours'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2'
            >
              <img src={PesaPal} alt='Pesapal' className='h-10 w-30' />
            </a>
          </div>
          <p className='text-center'>
            &copy; {new Date().getFullYear()} Divine African Tours. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
