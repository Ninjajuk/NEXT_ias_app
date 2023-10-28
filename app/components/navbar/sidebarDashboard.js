import { Link } from "@mui/material";
import UserPanel from "./UserPAnel";
import { data } from "./dataDashboard";


// import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Sidebar1 = () => {
//   const [openMenu, setOpenMenu] = useState(""); // Keep track of opened submenu
//   const [openSubmenu, setOpenSubmenu] = useState({}); // Keep track of opened submenu items
//   const location = useLocation();
//   const navigate = useNavigate();
  // Function to handle submenu click
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const handleSubMenuClick = (menu) => {
//     if (openMenu === menu) {
//       setOpenMenu("");
//     } else {
//       setOpenMenu(menu);
//     }
//   };

//   const isActiveMenu = (menuPath) => {
//     if (menuPath === "") {
//       return data.some((item) => {
//         if (Array.isArray(item.submenu)) {
//           return item.submenu.some(
//             (subItem) => location.pathname === `${item.path}${subItem.path}`
//           );
//         }
//         return false;
//       });
//     } else {
//       return location.pathname.includes(menuPath);
//     }
//   };

//   const isActiveSubMenu = (submenuPath) => {
//     if (location.pathname === submenuPath) {
//       return location.pathname === submenuPath;
//     }
//     return null;
//   };

//   const isMenuWithActiveSubmenu = (menu) => {
//     return (
//       Array.isArray(menu.submenu) &&
//       menu.submenu.some((subItem) => location.pathname.includes(subItem.path))
//     );
//   };
  return (
    <>
      <div
        // className={`md:w-1/5 max-h-screen bg-white overflow-y-auto hide-scrollbar transition-transform duration-300 text-black shadow p-4 flex flex-col ${
        //   isMobileSidebarOpen
        //     ? "-transform translate-x-0 left-0 fixed"
        //     : "hidden"
        // } md:block`}
        style={{  height: "100vh",backgroundColor:'gray' }}
      >
        <div className="hidden md:block">
          <div className="flex flex-col">
            <div className="px-6 flex items-center max-w-full h-16">
              <img
                className="max-w-full h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="hi"
              />
              <h1 className="pl-3">NinjaKing</h1>
            </div>
            <div className="flex flex-col gap-y-7" style={{ flex: "1 1 0%" }}>
              <div className="relative border-t-2 border-indigo-200 border-t-indigo-500">
                <h1 className="px-6 font-medium text-black">Home</h1>
                {data.map((item, index) => (
                  <div key={index}>
                    <div
                    //   onClick={() => {
                    //     handleSubMenuClick(item.menu);
                    //     navigate(`${item.path}`);
                    //   }}
                    //   className={`flex items-center p-3 space-x-2 hover:bg-gray-400 cursor-pointer rounded-full ${
                    //     isActiveMenu(item.path) && isActiveSubMenu(item.path)
                    //       ? "bg-gray-400"
                    //       : ""
                    //   }`}
                    >
                      {item.icon}
                      <span>{item.menu}</span>
                      {/* {item.submenu.length > 0 ? (
                        openMenu === item.menu ? (
                          <span className="ml-auto text-2xl">
                            <FaAngleUp />
                          </span>
                        ) : (
                          <span className="ml-auto text-2xl">
                            <FaAngleDown />
                          </span>
                        )
                      ) : null} */}
                    </div>
                    {/* {Array.isArray(item.submenu) &&
                      (item.submenu.length > 0 ||
                        item.submenu.some((subItem) =>
                          isActiveSubMenu(`${item.path}${subItem.path}`)
                        )) && (
                        <div
                          className={`flex flex-col ${
                            openMenu === item.menu ||
                            item.submenu.some((subItem) =>
                              isActiveSubMenu(`${item.path}${subItem.path}`)
                            )
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`${item.path}${subItem.path}`}
                              className={`pl-10 py-2 hover:bg-gray-400 rounded-full ${
                                isActiveSubMenu(`${item.path}${subItem.path}`)
                                  ? "bg-gray-400"
                                  : ""
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>


              {/* UserPanel placed outside the submenu section */}
        <div className="pt-24">
          <UserPanel/>
        </div>
        </div>

    
      </div>
    </>
  );
};
export default Sidebar1;


