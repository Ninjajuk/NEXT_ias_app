import { data } from "./navdata";

import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";

const Sidebar1 = ({ isMobileSidebarOpen }) => {
  const [openMenu, setOpenMenu] = useState(""); // Keep track of opened submenu
  const [openSubmenu, setOpenSubmenu] = useState({}); // Keep track of opened submenu items

  const [activeSubmenu, setActiveSubmenu] = useState(null);




  return (
    <>
      <div
        className={` h-screen bg-white overflow-y-auto hide-scrollbar transition-transform duration-500 ease-in-out text-black shadow p-4 flex flex-col ${
          isMobileSidebarOpen
            ? "-transform translate-x-0 left-0 fixed"
            : "hidden"
        } `}
        style={{ zIndex: "1000",width:'300px' }}
      >
        <div className="md:block overflow-y-auto">
          <div className="flex flex-col">
            {/* <div className="px-6 flex items-center max-w-full h-16">
              <img
                className="max-w-full h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="hi"
              />
              <h1 className="pl-3">NinjaKing</h1>
            </div> */}
            <div className="flex flex-col gap-y-7" style={{ flex: "1 1 0%" }}>
              <div className="relative border-t-2 border-indigo-200 border-t-indigo-500">
                <h1 className="px-6 font-medium text-black">Home</h1>
                {data.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => {
                        handleSubMenuClick(item.menu);
                        navigate(`${item.path}`);
                      }}
                      className={`flex items-center p-3 space-x-2 hover:bg-gray-400 cursor-pointer rounded-full 
                     
                      }`}
                    >
                      {item.icon}
                      <span>{item.menu}</span>
                      {item.submenu.length > 0 ? (
                        openMenu === item.menu ? (
                          <span className="ml-auto text-2xl">
                            <FaAngleUp />
                          </span>
                        ) : (
                          <span className="ml-auto text-2xl">
                            <FaAngleDown />
                          </span>
                        )
                      ) : null}
                    </div>
                    {Array.isArray(item.submenu) &&
                      (item.submenu.length > 0 ||
                        item.submenu.some((subItem) =>
                          isActiveSubMenu(`${item.path}${subItem.path}`)
                        )) && (
                        <div
                          className='flex flex-col'
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              to={`${item.path}${subItem.path}`}
                              className={`pl-10 py-2 hover:bg-gray-400 rounded-full 
                              }`}
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};
export default Sidebar1;