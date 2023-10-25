'use client'
import { useState } from "react";
import QualityTeaching from "../QualityTeaching";
import QualityStudyMaterial from "../QStudyMaterial";
import ValueAddedfeatures from "../ValueAddedfeatures";
import PersonalizedAcedemicCoach from "../PersonalizedAcedemic";
import Link from "next/link";



const DelhiCenter=()=>{

    const tabs = [
        { id: 0, label: 'Quality Teaching', content: <QualityTeaching/> },
        { id: 1, label: 'Quality Study Material', content: <QualityStudyMaterial/> },
        { id: 2, label: 'Value Added Features', content: <ValueAddedfeatures/> },
        { id: 3, label: 'Personalized and Dedicated Academic Coach', content: <PersonalizedAcedemicCoach/> },
      ];
      const [activeTab, setActiveTab] = useState(tabs[0]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    return (
      <>
   

        <section className="bg-gray-200">
          <div className="max-w-[1200px] mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-sky-200 px-6 py-6 rounded-md shadow-md">
                <h1 className="text-3xl pt-2">NEXT IAS (Corporate Tower) </h1>
                <p className="py-1">27-B, Pusa Road,</p>
                <p>Metro Pillar no. 118, Near Karol Bagh Metro Station,</p>
                <p>New Delhi - 110060</p>
                <p>Phone: 8081300200</p>
                <p>Email: info@nextias.com</p>
                <div className="bg-red-600 text-center my-2 rounded-md text-white font-semibold">
                  <button className="py-2 px-2">Locate on Maps</button>
                </div>
              </div>

              <div className="bg-sky-300 px-6 py-6  rounded-md shadow-md">
                <h1 className="text-3xl pt-2 pb-1">
                  NEXT IAS (Mukherjee Nagar)
                </h1>
                <p>27-B, Pusa Road,</p>
                <p>Metro Pillar no. 118, Near Karol Bagh Metro Station,</p>
                <p>New Delhi - 110060</p>
                <p>Phone: 8081300200</p>
                <p>Email: info@nextias.com</p>
                {/* <div className="bg-red-600 text-center my-2"><button className="py-2 px-2">Locate on Maps</button></div> */}
              </div>
            </div>
          </div>
        </section>

        {/* courses features */}
        <section className="bg-violet-300">
          <div className="max-w-[1200px] mx-auto py-4 ">
            <div className="w-full flex flex-col md:flex-row">
              <div className="md:w-1/2 ">
                <div className="w-full px-6 py-2">
                    <h1 className="text-2xl py-4">Course Features</h1>
                    {activeTab.content}
                </div>
              </div>
              <div className="md:w-1/2  py-4 px-4">
                <div className="w-full grid grid-cols-2 ">
                {tabs.map((tab,) => (
        <div
          key={tab.id}
          className={` flex flex-col items-center justify-center py-4  cursor-pointer ${
            activeTab.id === tab.id ? 'bg-gray-200 rounded-md shadow-md' : ''
          }`}
          onClick={() => handleTabClick(tab)}
        >
          <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png' alt="Icon" />
          <h1 className="text-center">{tab.label}</h1>
        </div>
      ))}
                    {/* <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div>
                    <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div>
                    <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div> */}
                    
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );}
export default DelhiCenter