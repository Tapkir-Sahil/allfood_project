import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return(
    <>
     <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>

    {/* <About/>
    <Menu/>
    <Services/>
    <Blog/>
    <Footer/>
    <ScrollTop/> */}
    </>
  )
}
export default App
