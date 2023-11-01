'use client'

import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'


export default function HomeLayout({children}) {

  return (
<>
<Navbar />
{/* {isHomePage && <NextIasHome />} */}
      {children}
<Footer />
</>
  )
}
