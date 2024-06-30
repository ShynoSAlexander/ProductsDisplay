import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Component/First'
import Second from './Component/Second'
import Third from './Component/Third'
import Navbar from './Component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Basic_table from './Component/Basic_table'
import Basic_card from './Component/Basic_card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Basic_card/>}/>
    <Route path="/c" element={<First data={{name:"User",age:10}}/>}/>
    <Route path="/s" element={<Second/>}/>
    <Route path="/t" element={<Third age="23"/>}/>
    <Route path="/b" element={<Basic_table/>}/>
    

   </Routes>
    </>
  )
}

export default App
