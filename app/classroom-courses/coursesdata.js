
import { MdOutlineWatchLater,MdMenuBook,MdGroups2 } from "react-icons/md";


import { FaAngleDown } from "react-icons/fa";

export const PreMains=[
    {
        img:'https://cdnstatic.nextias.com/banner/3306640CSAT-banner.jpg',
        title:' GS + CSAT Pre cum Main Foundation Course ',
        icon:<MdOutlineWatchLater className="w-6 h-6 text-sky-600"/>,
        para1:'11-12 Months '
    },
    {
        img:'https://cdnstatic.nextias.com/banner/5094509GS-Foundation-%281-year%29-banner_%283%29.jpg',
        title:' GS Pre cum Main Foundation Course ',
        icon:<MdOutlineWatchLater className="w-6 h-6 text-sky-600"/>,
        para1:'11-12 Months '
    },
    {
        img:'https://cdnstatic.nextias.com/banner/1615245GS-%2B-CSAT-%2B-Optional-Foundation-Course-banner.jpg',
        title:'  GS + CSAT + Optional ',
        icon:<MdOutlineWatchLater className="w-6 h-6 text-sky-600"/>,
        para1:'11-12 Months ',
        para2:'1000 Teaching Hours ',
        para3:'2 ',
        icon2:<MdMenuBook className="w-6 h-6 text-sky-600"/>,
        icon3:<MdGroups2 className="w-6 h-6 text-sky-600"/>,
    },
    {
        img:'https://cdnstatic.nextias.com/banner/5094509GS-Foundation-%281-year%29-banner_%283%29.jpg',
        title:' GS + Optional ',
        icon:<MdOutlineWatchLater className="w-6 h-6 text-sky-600"/>,
        para1:'11-12 Months '
    },
]

export const courseLink=[
    {title:'Pre Cum Main Foundation Courses',href:'',isActive:false},
    {title:'Prelims',href:'',isActive:false},
    {title:'Mains',href:'',isActive:false},
    {title:'First Step',href:'',isActive:false},
    {title:'More Courses',href:'',isActive:false,icon:<FaAngleDown/>,submenu:[{name:'Optional Courses',href:'',current: false,},{name:'Interview Guidance Program',href:'',current: false,},{name:'Postal Courses',href:'',current: false,},{name:'Faculty Panel',href:'',current: false,}]},
]