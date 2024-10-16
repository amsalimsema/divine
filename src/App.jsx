import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'

import './App.css'
import TourDetails from './components/TourDetails'
import { useEffect } from 'react'
import About from './components/About'

function App() {
  //ScrollToTop component to handle scrolling on route change
  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/tour/:tourName' element={<TourDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
