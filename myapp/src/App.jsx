import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import Services from './components/Services'

function App() {
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Services/>
    <Blog/>
    <Footer/>
    <ScrollTop/>
    </>
  )
}
export default App
