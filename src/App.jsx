import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import StreamList from './pages/StreamList'
import Movies from './pages/Movies'
import Cart from './pages/Cart'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<StreamList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
