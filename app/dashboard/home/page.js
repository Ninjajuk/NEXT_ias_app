
'use client'
import DailyCurrentAffairs from "@/app/daily-current-affairs/page";
import { useState } from "react";
import DailyCurrentAffairsDashboard from "./DailyCurrentAffairs";
import AllDashboardHome from "./AllDashboardHome";
import DailyModelQuestionDashboard from "./DailyModelQuestionDashboard";
import EditorailAnalysisDashboard from "./EditorailAnalysisDashboard";
const StudentDashBoard=()=>{
    // Get the current date
const currentDate = new Date();
  // Define an array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the day of the week, day of the month, and year
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = currentDate.getDate();
  const year = 2023; // You can change this to the desired year
  
  // Get the month name
  const monthName = monthNames[currentDate.getMonth()];
  
  // Format the date string
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;
  
  const tabs = [
    { id: 0, label: 'ALL', content:<AllDashboardHome/> },
    { id: 1, label: 'Daily Current Affairs', content: <DailyCurrentAffairsDashboard/> },
    { id: 2, label: 'Headlines of the Day', content: <AllDashboardHome/> },
    { id: 3, label: 'Daily MCQs', content: <DailyModelQuestionDashboard/> },
    { id: 4, label: 'Editorial Analysis', content: <EditorailAnalysisDashboard/> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
    return(
        <>
       
        <div className=" w-full flex flex-col md:flex-row gap-2 bg-[#e4e6e7]"style={{height:'calc(100vh - 8rem)'}}>
            <div className="md:w-4/5  flex flex-col my-8 px-2 gap-4">
                <div className="pb-4"><span className="text-lg text-blue-800 font-bold">Welcome,Samsu</span> <span className="text-gray-800 ">{formattedDate}</span></div>
                {/* navlinks tops */}
                <div className=" word-nowwrap ">     <ul className="flex justify-around border-b-2 border-gray-200">
                    {tabs.map((item ,index)=>
                      <li   key={index}         className={`  cursor-pointer ${
                        activeTab.id === item.id ? 'text-red-600 border-b-2 border-red-600' : ''
                      }`}
                      onClick={() => handleTabClick(item)}>{item.label}</li>)}
                </ul></div>
                <div className="grid grid-cols-1 gap-4    box-border mb-4">
                    {/* <div className="flex h-[200px] px-4 py-4 rounded-md shadow-2xl bg-white">
                        <div className="w-1/5 ">
                            <div className="w-full h-full"><img className="w-full h-full object-cover rounded-md" src='https://cdnstatic.nextias.com/assets/images/CurrentAffairs.png'/></div>
                            
                        </div>
                        <div className="w-4/5 flex justify-between">
                            <h1 className="px-4 text-blue-600 font-bold text-lg">31-10-2023</h1>
                            <img className="w-6 h-6" src='https://cdnstatic.nextias.com/assets/images/bookmark.svg'/>
                        </div>
                    </div>
                    <div className="flex h-[200px] px-4 py-4 rounded-md shadow-2xl bg-white">
                        <div className="w-1/5 ">
                        <div className="w-full h-full"><img className="w-full h-full object-cover rounded-md" src='https://cdnstatic.nextias.com/assets/images/CurrentAffairs.png'/></div>
                        </div>
                        <div className="w-4/5 flex justify-between">
                            <h1 className="px-4 text-blue-600 font-bold text-lg">31-10-2023</h1>
                            <img className="w-6 h-6" src='https://cdnstatic.nextias.com/assets/images/bookmark.svg'/>
                        </div>
                    </div>
                    <div className="flex h-[200px] px-4 py-4 rounded-md shadow-2xl bg-white">
                        <div className="w-1/5 ">
                        <div className="w-full h-full"><img className="w-full h-full object-cover rounded-md" src='https://cdnstatic.nextias.com/assets/images/CurrentAffairs.png'/></div>
                        </div>
                        <div className="w-4/5 flex justify-between">
                            <h1 className="px-4 text-blue-600 font-bold text-lg">31-10-2023</h1>
                            <img className="w-6 h-6" src='https://cdnstatic.nextias.com/assets/images/bookmark.svg'/>
                        </div>
                    </div> */}
                      {activeTab.content}
                </div>
            </div>
            <div className="md:w-1/5 h-full  flex flex-col  px-2 my-8 gap-4">
                <div>
                    <img src='https://cdnstatic.nextias.com/advertisement/345020340055Banner-right-1st_%283%29.png' />
                </div>
                <div>
                    <img src='https://cdnstatic.nextias.com/advertisement/2230797GS_banner_640x320.jpg' />
                </div>
            </div>
        </div>
        
        </>
    )
}
export default StudentDashBoard;