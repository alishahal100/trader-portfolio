import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Career from './components/Career'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="career" element={<Career/>}/>
      </Routes>
    
    </Router>
    </>
  )
}

export default App
