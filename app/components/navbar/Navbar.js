'use client'
import Link from 'next/link'

import {navdata} from './navdata'
const Navbar=()=>{
    const handleSubMenuHover = (e, index) => {
        // You can add logic to handle submenu visibility here
        // For simplicity, let's just add a className to show the submenu
        const submenu = e.currentTarget.querySelector('.submenu');
        if (submenu) {
          submenu.classList.toggle('hidden');
        }
      };
    return (
      <>
        <nav className="w-full bg-gray-100 sticky top-0">
          <div className='flex flex-col'>
            <div className='flex justify-end pt-3 px-2 '>
              <a href=''className='px-2 border-2 border-red-400 py-1 mr-1 mx-2 rounded-md'>NST Answer key</a>
              <a href=''className='px-2 border-2 border-red-400 py-1 mx-1 rounded-md'>Classroom Courses</a>
              <a href=''className='px-2 border-2 border-red-400 py-1 mx-2 rounded-md'>Live/Online Classes</a>
              <a href=''className='px-2 border-2 border-red-400 py-1 mx-2 rounded-md'>Our Selections</a>
              <a href=''className='px-2 py-1 bg-red-600 rounded-md'><div className='px-2 py-1  text-white'>Admission</div></a>
              <a href=''className='px-2 bg-red-600 py-1 mx-2 rounded-md'><div className='px-2 py-1  text-white'>भाषा : हिंदी</div> </a>
              <a href=''className='px-2  py-1 mx-2 rounded-md flex items-center'>
                <span><img src='https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg'/></span>
                <span className='pl-2'>8081300200</span> </a>
              <a href=''className='px-2  py-1 mx-1 rounded-md'>
                <div className='px-2 py-1'><img src='https://cdnstatic.nextias.com/assets/images/icons/search.svg'/></div>
                 </a>
       
            </div>
            <div className="max-w-[1400px] flex items-center justify-around">
            <div className="px-4 py-2" width="146" height="30">
              <img
                className="w-full h-full object-cover"
                src="https://cdnstatic.nextias.com/assets/images/logo/next-ias.png"
              />
            </div>
            <div className="flex py-2 h-full">
              <div className="flex px-1 h-6">
                {navdata.map((item, index) => (
                       <div  className="relative " onMouseEnter={(e) => handleSubMenuHover(e, index)} onMouseLeave={(e) => handleSubMenuHover(e, index)}>
                       <Link href={item.href} className='px-2 py-1 hover:border-b-2 hover:border-red-400  hover:text-[#cf3726] z-10'>
                         {item.title}
                       </Link>
                       {item.submenu && (
                         <div className="submenu hidden  absolute top-full left-0 bg-[#ba9d5a] border border-gray-300 rounded-md p-2 w-[250px] z-10">
                           {item.submenu.map((sublink) => (
                             <Link key={sublink.name} href={sublink.href} className='block px-2 py-1 text-white hover:text-red-800'>
                               {sublink.name}
                             </Link>
                           ))}
                         </div>
                       )}
                     </div>
                       ))}
              </div>
            </div>
            <div className="flex py-4 flex-wrap gap-2">
              <button className="px-2 py-1 border-2 border-red-400 text-red-600">MTS portal</button>
              <button className="px-2 py-1 border-2 border-red-400 text-red-600">Student Login</button>
            </div>
          </div>
          </div>

        
        </nav>
      </>
    );
}
export default Navbar;