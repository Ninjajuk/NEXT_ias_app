'use client'

import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import NextIasHome from './home/home'


export default function HomeLayout({children}) {

  return (
<>
{/* <Navbar /> */}
<NextIasHome/>
      {/* {children} */}
{/* <Footer /> */}
</>
  )
}
