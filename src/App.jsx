import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'


// Imports page components
import Home from './pages/Home.jsx'
import Festival from './pages/Festival.jsx'
import Volunteers from './pages/Volunteers'
import About from './pages/About'
import Shop from './pages/Shop'
import ComponentTest from './pages/ComponentTests.jsx'
import Imprint from './pages/imprint.jsx'
import Terms from './pages/terms.jsx'
import ProductPage from './pages/ProductPage'

// This assigns the routes for all pages, also the Navbar and Footer are globally set here
function App() {
  return (
    <div style={{ padding: '0px', width: '100vw', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/componentTest" element={<ComponentTest />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;