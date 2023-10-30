import FooterDashboard from "../components/navbar/Footer-Dashboard";

import NavbarDashboard from "../components/navbar/navDashboard";
import Sidebar1 from "../components/navbar/sidebarDashboard";


export default function DashboardLayout({children,}) 
  
  
  {
    return (
      <>
        <div className="max-h-screen bg-red-100 w-full">
          <div className="flex w-full">
            <Sidebar1 style={{ width: "12rem" }} />
            {/* <Sidebar /> */}
            <div
              className="flex flex-col  bg-red-600 w-full md:w-[calc(100% - 12rem)]"
            //   style={{ width: "calc(100% - 12rem)" }}
            >
              <NavbarDashboard />
              <main className="overflow-y-auto"> {children}</main>
              <div  className='mt-auto' ><FooterDashboard /></div>
           
             
        
            </div>
          </div>
        </div>
      </>
    );
  }