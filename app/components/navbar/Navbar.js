'use client'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import {navdata} from './navdata'
import Sidebar1 from './Sidebar';
import { useState } from 'react';
import LoginModal from '../Modal/LoginModal';
import SignUpModal from '../Modal/SignUpModal';
import CoursesHover from './CoursesHoverItems';

 
import { usePathname } from 'next/navigation'

const Navbar=()=>{
  const pathname=usePathname()

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCoursesHovered, setCoursesHovered] = useState(false);
    const handleSubMenuHover = (e, index) => {
        // You can add logic to handle submenu visibility here
        // For simplicity, let's just add a className to show the submenu
        if (navdata[index].title === 'Courses') {
          setCoursesHovered(!isCoursesHovered);
        }
        const submenu = e.currentTarget.querySelector('.submenu');
        if (submenu) {
          submenu.classList.toggle('hidden');
        }
      };
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isSignupModalOpen, setSignupModalOpen] = useState(false);

      const openLoginModal = () => {
        setIsModalOpen(true);
      };
      const openSignupModal = () => {
        setSignupModalOpen(true);
    
      };
    
      const closeLoginModal = () => {
        setIsModalOpen(false);
        setSignupModalOpen(false)
      };
      const closeSignUpModal = () => {
        setSignupModalOpen(false);
        setIsModalOpen(false);
      };

     
const [mobilemenuOpen,setIsMobileMenuOpen]=useState(false)
function handlemoblieMenu(){
  setIsMobileMenuOpen(!mobilemenuOpen)
  
}

    return (
      <>
        <nav className="w-full bg-gray-100 sticky top-0 z-10">
             {/* Desktop menu starts here  */}
          <div className="hidden xl:flex flex-col">
            <div className="flex justify-end  px-2 pt-4">
              <a
                href=""
                className="px-2 ring-1 ring-amber-400 py-1  rounded-md "
              >
                NST Answer key
              </a>
              <a
                href="/classroom-courses/foundation-courses"
                className="px-2 ring-1 ring-amber-400 py-1  rounded-md ml-2"
              >
                Classroom Courses
              </a>
              <a
                href=""
                className="px-2 ring-1 ring-amber-400 py-1 rounded-md ml-2"
              >
                Live/Online Classes
              </a>
              <a
                href=""
                className="px-2 ring-1 ring-amber-400 py-1  rounded-md ml-2"
              >
                Our Selections
              </a>
              <a href="" className="px-2 py-1 bg-red-600 rounded-md ml-2">
                <div className="px-2 py-1  text-white">Admission</div>
              </a>
              <a href="" className="px-2 bg-red-600 py-1 mx-2 rounded-md">
                <div className="px-2 py-1  text-white">भाषा : हिंदी</div>{" "}
              </a>
              <a
                href=""
                className="px-2  py-1 mx-2 rounded-md flex items-center"
              >
                <span>
                  <img src="https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg" />
                </span>
                <span className="pl-2">8081300200</span>{" "}
              </a>
              <Link href="/" className="px-2  py-1 mx-1 rounded-md">
                <div className="px-2 py-1">
                  <img src="https://cdnstatic.nextias.com/assets/images/icons/search.svg" />
                </div>
              </Link>
            </div>
            <div className="flex px-4  items-center py-4 justify-between">
              <div className="" style={{ width: "150px", height: "30px" }}>
                <Link href="/home">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdnstatic.nextias.com/assets/images/logo/next-ias.png"
                  />
                </Link>
              </div>
              <div className="flex">
                {" "}
                {navdata.map((item, index) => (
                  <div key={index}
                    className="relative "
                    onMouseEnter={(e) => handleSubMenuHover(e, index)}
                    onMouseLeave={(e) => handleSubMenuHover(e, index)}
                  >
                    <Link
                      href={item.href}
                      className={`px-2 py-1 hover:border-b-2 hover:border-red-400 ${pathname === item.href ? 'border-b-2 border-sky-400' : ''}  hover:text-[#cf3726] z-10`}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="submenu hidden  absolute top-full left-0 bg-[#ba9d5a] border border-gray-300 rounded-md p-2 w-[250px] z-10">
                        {item.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-2 py-1 text-white hover:text-red-800 hover:border-b-2 hover:border-red-400"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 items-center ">
                <button  className="px-2 py-1 ring-1 ring-amber-400 text-red-600">
                  MTS portal
                </button>
                <button onClick={openLoginModal} className="px-2 py-1 ring-1 ring-amber-400 text-red-600">
                  Student Login
                </button>
              </div>
            </div>
          </div>
   {/* Desktop menu ends here  */}


          {/* Mobile Menu starts here  */}
          <div className="xl:hidden flex justify-between px-4 py-4 ">
            <div className={` flex justify-between px-4 py-4 ${mobilemenuOpen?'w-[250px]':'w-0'}`} >
              <Link href="/home">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  src="https://cdnstatic.nextias.com/assets/images/logo/next-ias.png"
                />
              </Link>
            </div>
            <FaBars  onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} className='h-8 w-8'/>
          </div>
          {/* Mobile Menu ends here */}
        </nav>
        <Sidebar1 isMobileSidebarOpen={isMobileSidebarOpen} />
        {isModalOpen ? (
          <LoginModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeLoginModal}
            onClick={openSignupModal}
           
          />
        ):null}
                {isSignupModalOpen ? (
          <SignUpModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeSignUpModal}
            onClick={openLoginModal}
      
          />
        ):null}

      </>
    );
}
export default Navbar;