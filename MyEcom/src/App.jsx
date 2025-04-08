import { useState } from 'react'

import './App.css'
import EcomHome from './EcomHome/EcomHome'
import EcomNav from './EcomNav/EcomNav'
import EcomProduct from './EcomProduct/EcomProduct'
import About from './About/About'
import Contact from './Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EcomNav></EcomNav>
      <EcomHome></EcomHome>
      <EcomProduct></EcomProduct>
      <About></About>
      <Contact></Contact>
    </>
  )
}

export default App
