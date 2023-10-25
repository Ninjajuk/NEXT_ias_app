'use client'

import GsTeam from './gsTeam'
import OptionalTeam from './optionalTeam'
import React, { useState } from "react";
const FacultyPanel=()=>{

  const[gsteam,setgsteam]=useState(true)
  const[optionalteam,setOptionalteam]=useState(false)

  function handleGsTEam(){
    setgsteam(true)
    setOptionalteam(false);
  }
  function handle_OptionalTeam(){
    setOptionalteam(true)
    setgsteam(false);
  }
    return (
      <>
        <section className="bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
            <h1 className="text-4xl text-sky-600 font-bold mb-2">NEXT IAS</h1>
            <h1 className="text-sky-600 text-3xl mb-4">Faculty Members</h1>
            <p className="mb-4">
              It is the quality of teachers that determines the quality of
              students. Guided by this thought, NEXT IAS has an experienced pool
              of faculty members comprising highly acclaimed retired professors,
              dynamic individuals, scholars, academicians, and subject matter
              experts. They are well known all over India for their easy,
              student-friendly, and effective teaching methodologies. The vast
              experience, in-depth knowledge of the content, and grasp of the
              UPSC's pattern of examination, combined with the ability to
              customize the teaching as per individual needs make our faculties
              the most sought-after in the field.
            </p>
            <p className="mb-4">
              The team continuously strives to maintain the quality of the
              content. Language proficiency and simplification of the concepts
              with examples are key tenets of pedagogy at NEXT IAS which enables
              students from various regions and diverse backgrounds to
              understand the topic easily. Besides, the faculty panel is
              supported by a large team of content developers and researchers.
            </p>
            <p>
              In our quest to guide the students to transform their dreams into
              reality, we at NEXT IAS, in addition to our faculty members, also
              invite leading professionals and eminent academic luminaries to
              interact regularly with the students, as visiting faculty members.
            </p>
            <p></p>
          </div>
        </section>

        {/* distinguised faculty */}
        <section className="bg-gray-300">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
            <h1 className="text-4xl text-sky-600 font-bold my-4">
              Distinguished Faculty
            </h1>
            <div className="w-full flex flex-col md:flex-row">
              <div className="sm:mx-auto md:w-2/5">
                <div className="w-full">
                  <img src="https://cdnstatic.nextias.com/assets/images/CMD_SIR.png" />
                </div>
              </div>
              <div className="md:w-3/5 px-4">
                <p className="mb-4 px-2 pt-4">
                  Mr. B. Singh (Ex.IES) is the founder and CMD of NEXT IAS and
                  MADE EASY Group. He has a teaching experience of more than 20
                  years & has authored over a dozen books on GS & Civil
                  Engineering.
                </p>
                <p className="mb-4 px-2">
                  He is an alumnus of IIT BHU, Varanasi. He qualified UPSC
                  Engineering Services Examination thrice. He has worked in
                  Central Engineering Services as an IES officer. He resigned
                  from the prestigious service to serve and guide the student’s
                  community.
                </p>
                <p className="mb-4 px-2">
                  Mr. B. Singh also holds the membership of several technical
                  institutions like:
                </p>
              </div>
            </div>
            <p className="my-4">
              He has been conferred with several national awards for his
              contribution in the field of education and social welfare.
            </p>
            <p className="mb-8">
              He was awarded as CHAMPIONS OF CHANGE Award by Honourable Vice
              President of India, Captains of Industry Award by Honourable Chief
              Minister of MP, National Education Excellence Award by Honourable
              Governor of Gujrat, Social Development and Education Promotion
              Award by ABP News and many more. His lectures & motivational talks
              are highly demanded & appreciated by student’s community.
            </p>
          </div>
        </section>
        {/* distinguised faculty */}

        {/*  faculty card */}
        <section className="bg-white my-4">
          <div className="max-w-[990px] mx-auto bg-white pb-8 ">
            <div className="flex items-center justify-center w-[250px] mx-auto  ">
              <div className={`w-1/2 px-2 ${gsteam?'bg-red-700':'bg-red-200'}  flex justify-center rounded-md`}>
                <button onClick={handleGsTEam} className=" px-4 py-2  text-white">GS</button>
              </div>
              <div className={`w-1/2 px-2 ${optionalteam?'bg-red-700':'bg-red-200'}  flex justify-center rounded-md`}>
                <button onClick={handle_OptionalTeam} className="px-2 py-2  text-white">Optionals</button>
              </div>
            </div>
            {gsteam ? <GsTeam/>:null}
                    {optionalteam ? <OptionalTeam/>:null}
          </div>
        </section>


      </>
    );
}
export default FacultyPanel;