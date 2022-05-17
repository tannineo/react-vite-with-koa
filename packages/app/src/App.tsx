import { Link, Routes, Route } from 'react-router-dom'

import Home from '#src/components/Home'
import Converter from '#src/components/Converter'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <nav>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/converter'>Converter</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/converter' element={<Converter />} />
      </Routes>
    </div>
  )
}

export default App
