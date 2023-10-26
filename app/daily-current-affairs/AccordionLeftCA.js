
'use client'
import React, { useState } from 'react';
import {FaAngleDown,FaAngleUp,} from "react-icons/fa";


export default function AccordionLeftCA({title,content}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div className="border  p-2 duration-300 ease-in-out">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-normal px-4 py-2">{title}</h2>
         
            {Array.isArray(content) && content.length > 0 ? (
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded-md transition duration-150 ease-in-out transform hover:scale-105 focus:scale-105"
            onClick={toggleAccordion}
          >
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        ) : null}
          </div>

          {isOpen && (
        <div  className={`mt-2 p-2 border-t transition-max-h duration-500 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}>
          {Array.isArray(content) ? (
            <ul className='list-disc ml-8'>
              {content.map((item, index) => (
                <li className='py-2' key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      )}

        </div>
      </>
    );
}