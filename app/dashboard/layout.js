
'use client'
import { useState } from "react";
import FooterDashboard from "../components/navbar/Footer-Dashboard";

import NavbarDashboard from "../components/navbar/navDashboard";
import Sidebar1 from "../components/navbar/sidebarDashboard";


export default function DashboardLayout({children,}) {

  // const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // function SidebarOpen(){
  //   setIsMobileSidebarOpen(!isMobileSidebarOpen)
  // }
    return (
      <>
        <div className="h-screen  w-full">
          <div className="flex w-full">
            <Sidebar1 style={{ width: "250px" }} />
            {/* <Sidebar /> */}
            <div className="flex flex-col  w-full md:w-[calc(100% - 12rem)] ">
              <NavbarDashboard />
              <main className="overflow-y-auto  "> {children}</main>
              <div  className='mt-auto h-[4rem]' ><FooterDashboard /></div>
            </div>
          </div>
        </div>
      </>
    );
  }