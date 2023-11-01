import {
    FaHome,
    FaUsers,
    FaFolder,
    FaRegCalendarAlt,
    FaChartPie,
    FaFileAlt,
    FaLayerGroup,
    FaImage,
    FaMoon,
    FaRegCommentAlt,
    FaWrench,
    FaPowerOff,
    FaCog,
    FaCreditCard,
    FaAngleRight,
    FaAngleDown,
    FaAngleUp,
    FaRegHeart,
    FaBookmark
  } from "react-icons/fa";
  import { MdDashboard, MdOutlineSms, MdAnalytics } from "react-icons/md";
  
  export const data = [
    {
      menu: "Dashboard",
      icon: <MdDashboard />,
      submenu: "",
      path: "/dashboard",
      active: false
    },
    {
      menu: "My Handouts",
      icon: <FaFileAlt />,
      path: "",
      active: false
    },
    // {
    //   menu: "Business analytics",
    //   icon: <MdAnalytics />,
    //   submenu: "",
    //   path: "/business-analytics",
    //   active: false
    // },
    {
      menu: "My Bookmarks",
      icon: <FaUsers />,
      path: "/team",
      active: false
    },
    {
      menu: "Annoucements",
      icon: <FaFolder />,
      path: "/project",
      active: false
    },
    // {
    //   menu: "Calender",
    //   icon: <FaRegCalendarAlt />,
    //   submenu: "/calendar",
    //   path: "/calendar",
    //   active: false
    // },
  
    {
      menu: "My Profile",
      icon: <FaImage />,
      path: "/promotion",
      active: false
    },
    {
      menu: "Free Initiative",
      icon: <MdOutlineSms />,
      path: "/message",
      active: false
    },
    {
      menu: "Current Affairs",
      icon: <FaWrench />,
      path: "/daily-current-affairs",
      active: false
    }
    ,
    {
      menu: "Important contacts",
      icon: <FaWrench />,
      path: "/daily-current-affairs",
      active: false
    }
  ];
  export const team = [
    { menu: "Heroicons", icon: <FaLayerGroup />, submenu: "", path: "" },
    { menu: "Tailwind Labs", icon: <FaImage />, submenu: "", path: "" },
    { menu: "Workation", icon: <FaMoon />, submenu: "", path: "" },
    { menu: "Frontend", icon: <FaRegCommentAlt />, submenu: "", path: "" }
  ];
  export const sidebarBottom = [
    { menu: "Setting", icon: <FaWrench />, submenu: "", path: "" },
    { menu: "Log Out", icon: "", submenu: "", path: "" }
  ];
  
  export const userprofile = [
    {
      id: 1,
      menu: "MY ORDERS",
      icon: <FaFolder />,
      submenu: [],
      path: "/myorder",
      active: false
    },
    {
      id: 2,
      menu: "MY Wishlist",
      icon: <FaRegHeart />,
      submenu: [],
      path: "/wishlist",
      active: false
    },
    {
      id: 3,
      menu: "ACCOUNT SETTINGS",
      icon: <FaCog />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "Profile Information", path: "/profile", active: false },
        { title: "Manage Address", path: "/address", active: false },
        { title: "PAN Card Information", path: "/pan", active: false }
      ],
      path: "null",
      active: false
    },
    {
      id: 4,
      menu: "PAYMENTS",
      icon: <FaCreditCard />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "Gift Cards", path: "/prof" },
        { title: "Saved UPI", path: "/address" },
        { title: "Saved Cards", path: "/savedcards" }
      ],
      path: "",
      active: false
    },
    {
      id: 5,
      menu: "MY STUFF",
      icon: <FaBookmark />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "MY Coupons", path: "/coupons", active: false },
        { title: "MY Reviews & Ratings", path: "/review", active: false },
        { title: "All Notifications", path: "/notifications", active: false }
      ],
      path: "null",
      active: false
    },
    // { menu: "Project", icon: <FaFolder />, submenu: "", path: "" },
    // { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: "", path: "" },
    // { menu: "Documents", icon: <FaFileAlt />, submenu: "", path: "" },
    { id: 6, menu: "Logout", icon: <FaPowerOff />, submenu: [], path: "/logout" }
  ];
  