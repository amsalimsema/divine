import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'

import './App.css'
import TourDetails from './components/TourDetails'
import { useEffect } from 'react'

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

          <Route path='/tour/:tourName' element={<TourDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
