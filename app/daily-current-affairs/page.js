 'use client'
import AccordionLeftCA from './AccordionLeftCA';
import {accordionContent,editorailAnalysis} from './accordionData'
import React, { useState } from 'react';
import { FaRegCalendarAlt,FaArrowRight} from "react-icons/fa";

export default function DailyCurrentAffairs(){
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email subscription logic here
    console.log(`Subscribed with email: ${email}`);
    // Clear the email input
    setEmail('');
  };
    return (
      <>
        <h1 className="text-5xl text-center py-4">DailyCurrentAffairs</h1>
        <section className="py-4">
          <div className="w-full px-[25px] flex flex-col md:flex-row gap-4">
            {/* Accordion left starts here */}
            <div className="md:w-1/4 rounded-md shadow-md border-2">
              {accordionContent.map((item, index) => (
                <AccordionLeftCA
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
            {/* Accordion left Ends here */}

            <div className="md:w-3/4  flex flex-col  rounded-md">
              <div className="relative w-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdnstatic.nextias.com/assets/images/current-affairs-banner.png"
                  alt="Daily Current affiars"
                />
                <div className=" flex flex-col absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-4xl text-white text-start">
                    Daily Current Affairs
                  </h1>
                  <p className="text-lg text-white text-start ">
                    Headlines of the Day | Daily Analysis | Editorial Analysis
                  </p>
                </div>
              </div>

              {/* Headlines of the Day,Daily Current Affairs and Editorial Analysis starts here */}
              <section>
                <div className="w-full my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md bg-white">
                  
                  <div className="bg-yellow-300  rounded-md shadow-md h-[350px] flex flex-col">
                  <div className="h-1/6 bg-blue-800 py-4 text-center text-white rounded-sm text-2xl sticky top-0">
                      <h1 className="txt">Editorial Analysis</h1>
                    </div>
                    <ul className="h-4/6 overflow-y-auto custom-scrollbar">
                      {editorailAnalysis.map((item) => (
                        <>
                          <li className="px-2 py-2   shadow-md border-b-2 border-sky-200">
                            <a href="" className="flex items-center">
                              <span className='text-blue-600'>{item.icon1}</span>
                              <span className="px-2 leading-7 tracking-wider">
                                {item.title}
                              </span>
                              <span className="ml-auto w-6 h-6 text-red-600">
                                {item.icon2}
                              </span>
                            </a>
                          </li>
                        </>
                      ))}
                      <li>Hello Samsu</li>
                    </ul>
                    <div className="w-full h-1/6 bg-black py-4 text-center  rounded-sm text-2xl  flex items-center">
                      <input type="date" className=" sticky top-0 z-10 mx-2 rounded-md px-2" />
                      <FaArrowRight className='text-blue-600 ml-auto w-6 h-6 rounded-full bg-blue-300 mr-2'/>
                    </div>
                  </div>


                  <div className="bg-sky-300 rounded-md shadow-md h-[350px] flex flex-col relative">
                  <div className="h-1/6 bg-blue-800 py-4 text-center text-white rounded-sm text-2xl sticky top-0">
                      <h1 className="">Daily Current Affairs</h1>
                    </div>
                    <ul className="h-4/6 overflow-y-auto custom-scrollbar">
                      {editorailAnalysis.map((item) => (
                        <>
                          <li className="px-2 py-2   shadow-md border-b-2 border-sky-200">
                            <a href="" className="flex items-center">
                              <span className='text-blue-600'>{item.icon1}</span>
                              <span className="px-2 leading-7 tracking-wider">
                                {item.title}
                              </span>
                              <span className="ml-auto w-6 h-6 text-red-600">
                                {item.icon2}
                              </span>
                            </a>
                          </li>
                        </>
                      ))}
                      <li>Hello Samsu</li>
                    </ul>
                    <div className="w-full h-1/6 bg-black py-4 text-center  rounded-sm text-2xl  flex items-center">
                      <input type="date" className=" sticky top-0 z-10 mx-2 rounded-md px-2" />
                      <FaArrowRight className='text-blue-600 ml-auto w-6 h-6 rounded-full bg-blue-300 mr-2'/>
                    </div>
                  </div>

                  <div className="bg-gray-200 rounded-md shadow-lg h-[350px] flex flex-col  relative ">
                    <div className="h-1/6 bg-blue-800 py-4 text-center text-white rounded-sm text-2xl sticky top-0">
                      <h1 className="txt">Editorial Analysis</h1>
                    </div>
                    <ul className="h-4/6 overflow-y-auto custom-scrollbar">
                      {editorailAnalysis.map((item) => (
                        <>
                          <li className="px-2 py-2   shadow-md border-b-2 border-sky-200">
                            <a href="" className="flex items-center">
                              <span className='text-blue-600'>{item.icon1}</span>
                              <span className="px-2 leading-7 tracking-wider">
                                {item.title}
                              </span>
                              <span className="ml-auto w-6 h-6 text-red-600">
                                {item.icon2}
                              </span>
                            </a>
                          </li>
                        </>
                      ))}
                      <li>Hello Samsu</li>
                    </ul>
                    <div className="w-full h-1/6 bg-black py-4 text-center  rounded-sm text-2xl  flex items-center">
                      <input type="date" className=" sticky top-0 z-10 mx-2 rounded-md px-2" />
                      <FaArrowRight className='text-blue-600 ml-auto w-6 h-6 rounded-full bg-blue-300 mr-2'/>
                    </div>
                  </div>
                </div>
              </section>
              {/* Headlines of the Day,Daily Current Affairs and Editorial Analysis ends here */}

              {/* Join the newsletter and be updated with the latest news starts here */}
              <section>
                <div className="my-4 bg-gray-600 rounded-md h-24 ">
                  <div className="h-full flex items-center justify-between px-12">
                    <div className="flex gap-4">
                      <img src="https://cdnstatic.nextias.com/assets/images/icons/email-white.svg" />
                      <h1 className="text-white">
                        {" "}
                        Join the newsletter and be updated with the latest news{" "}
                      </h1>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="flex ">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded-l-lg border border-gray-400 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="bg-[#ed3237] text-white p-2 rounded-r-lg hover:bg-[#ff575c] transition duration-300"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              {/* Join the newsletter and be updated with the latest news ends here */}
            </div>
          </div>
        </section>
      </>
    );
}