
'use client'
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import Sidebar1 from "./sidebarDashboard";
import '../../classroom-courses/first-courses/style.css'

function NavbarDashboard({SidebarOpen}) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
       
  return (
    <>  
    <div
    className="w-full sticky top-0 z-10  flex items-center justify-between p-4 bg-white"
    style={{ height: "4rem",  }}
  >
    <div className="flex items-center">
      {/* Menu icon */}
      <button
        className="md:hidden text-gray-600 pr-2"
        onClick={()=>setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* <button className="hidden md:block">
        <h1 className="text-white text-xl font-semibold leading-5 tracking-tight">
          NinjaKing
        </h1>
      </button> */}
      <button className="md:hidden max-w-[146px] max-h-[30px]">
        <img src='https://cdnstatic.nextias.com/assets/images/next_ias_logo.png'/>
      </button>
    </div>

   {/* Search input */}
    {/* <div>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-2 py-1  "
      />
    </div> */}
       {/* Search input */}

    {/* User icon */}
    <div className="text-xl w-10 h-10  flex items-center p-2 ring-1 ring-red-500 text-red-500 rounded-md">
      {/* <h1 className='font-medium text-gray-600'>Hello User</h1> */}
      {/* <img
        class="w-full h-full rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
      /> */}
      <FaRegBell className="text-2xl  "/>
    </div>
  </div>

   
   </>
  
  );
}

export default NavbarDashboard;
