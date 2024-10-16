import './index.css'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Footer from './components/Footer';


function App() {

  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
