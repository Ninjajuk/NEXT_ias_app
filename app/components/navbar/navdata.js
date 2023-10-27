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
  

export const navdata=[
{title:'Home',href:'/',isActive:false,},
{title:'About us',href:'/about-us',isActive:false,submenu:[{name:'About Us',href:'/about-us',current: false,},{name:'Director desk',href:'/director-desk',current: false,},{name:'Advisory Panel',href:'/advisory-panel',current: false,},{name:'Faculty Panel',href:'/faculty-panel',current: false,}]},
{title:'Courses',href:'/courses',isActive:false,},
{title:'Mentorship',href:'/mentorship',isActive:false,},
{title:'Test Series',href:'/test-series',isActive:false,},
{title:'Current Affairs',href:'/daily-current-affairs',isActive:false,},
{title:'Student Portal',href:'',isActive:false,},
{title:'Centers',href:'/centers/delhi',isActive:false,},
]

export const footerdata=[
    {title:'Admission',href:'/',isActive:false,},
    {title:'About us',href:'about-us',isActive:false,submenu:[{name:'About Us',href:'about-us',current: false,},{name:'Director desk',href:'director-desk',current: false,},{name:'Advisory Panel',href:'advisory-panel',current: false,},{name:'Faculty Panel',href:'faculty-panel',current: false,}]},
    {title:'Courses',href:'courses',isActive:false,},
    {title:'Mentorship',href:'mentorship',isActive:false,},
    {title:'Test Series',href:'',isActive:false,},
    {title:'Current Affairs',href:'',isActive:false,},
    {title:'Student Portal',href:'',isActive:false,},
    {title:'Centers',href:'',isActive:false,},
    ]


    export const data = [
        {
          menu: "Dashboard",
          icon: <MdDashboard />,
          submenu: "",
          path: "/dashboard",
          active: false
        },
        {
          menu: "My Shop",
          icon: <FaFileAlt />,
          submenu: [
            { title: "Add products", path: "/shop/addproducts" },
            { title: "Products", path: "/shop/productslist" },
            { title: "Orders", path: "/shop/orders" },
            // { title: "Orders Details", path: "/orders" },
            { title: "Customers", path: "/shop/customers" },
            { title: "Customers Details", path: "/shop/customersdetails" },
            { title: "Refund", path: "/shop/refund" }
          ],
          path: "",
          active: false
        },
        {
          menu: "Business analytics",
          icon: <MdAnalytics />,
          submenu: "",
          path: "/business-analytics",
          active: false
        },
        {
          menu: "Team",
          icon: <FaUsers />,
          submenu: "",
          path: "/team",
          active: false
        },
        {
          menu: "Project",
          icon: <FaFolder />,
          submenu: "",
          path: "/project",
          active: false
        },
        {
          menu: "Calender",
          icon: <FaRegCalendarAlt />,
          submenu: "/calendar",
          path: "/calendar",
          active: false
        },
      
        {
          menu: "Promotion",
          icon: <FaImage />,
          submenu: "",
          path: "/promotion",
          active: false
        },
        {
          menu: "Message",
          icon: <MdOutlineSms />,
          submenu: "",
          path: "/message",
          active: false
        },
        {
          menu: "Setting",
          icon: <FaWrench />,
          submenu: "",
          path: "/setting",
          active: false
        }
      ];
    