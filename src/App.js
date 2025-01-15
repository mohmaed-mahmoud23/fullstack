import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Componest/Header'
import Footer from './Componest/Footer'

const App = () => {
  return (
    <>
<Header/>
   <main  className='min-h-[calc(100vh-120px)]'>
     <Outlet/>
   </main>
    <Footer/>
    </>
  )
}

export default App 