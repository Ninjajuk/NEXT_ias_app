
import {indianHistort,HISTORY_ART_CULTURE,geography_faculty,polity_faculty } from './facultyData'
const FacultyPanel=()=>{
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
              <div className="md:w-2/5">
                <div className="w-full">
                  <img src="https://cdnstatic.nextias.com/assets/images/CMD_SIR.png" />
                </div>
              </div>
              <div className="md:w-3/5 px-4">
                <p className="mb-4 px-2">
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
        <section className="bg-white">
          <div className="max-w-[990px] mx-auto bg-white pb-8 ">
            <div className="flex items-center justify-center w-[250px] mx-auto  ">
              <div className="w-1/2 px-2 bg-red-700 flex justify-center rounded-md">
                <button className=" px-4 py-2  text-white">GS</button>
              </div>
              <div className="w-1/2 px-2 bg-red-700 flex justify-center rounded-md">
                <button className="px-2 py-2  text-white">Optionals</button>
              </div>
            </div>
            <h1 className="my-4 text-center text-2xl text-sky-500">INDIAN ECONOMY</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-2 border-2 mx-2 gap-2">
              {indianHistort.map((item, index) => (
                <div
                  key={index}
                  className=" h-full flex flex-col   mx-2 border-2 "
                >
                  <div className="flex items-center  h-[250px] pb-2 my-4 overflow-hidden bg-gray-200">
                    <img
                      className="h-full w-full object-cover"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className=" my-2 px-4  ">
                    <p className="text-lg font-semibold text-sky-600 py-2">
                      {item.name}
                    </p>
                    <ul>
                      <li className="flex">
                        <span className="text-sm py-2">{item.text1}</span>
                      </li>
                      <li>
                        <span>{item.text2}</span>
                      </li>
                      <li>
                        <span className="">{item.text3}</span>
                      </li>
                    </ul>
                    {/* <p className="text-md text-wrap py-2 flex items-center"></p>
        <p className="text-md text-wrap py-2">{item.text2}</p>
        <p className="text-md text-wrap py-2">{item.text3}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* History art and culture */}
        <section className="bg-white">
          <div className="max-w-[990px] mx-auto bg-white pb-8 ">
        
            <h1 className="my-4 text-center text-2xl text-sky-500">HISTORY, ART & CULTURE</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-2 mx-2  ">
              {HISTORY_ART_CULTURE .map((item, index) => (
                <div
                  key={index}
                  className=" h-full flex flex-col  border-2 "
                >
                  <div className="w-full flex items-center  h-[250px]   my-4 overflow-hidden  px-2 py-2 ">
                    <img
                      className="h-full w-full object-cover border-2 border-gray-200"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
             <div className='border border-t-2'></div>
                  <div className=" my-2 px-4  ">
                    <p className="text-lg font-semibold text-sky-600 py-2">
                      {item.name}
                    </p>
                    <ul>
                      <li className="flex">
                        <span className="text-sm py-2">{item.text1}</span>
                      </li>
                      <li>
                        <span>{item.text2}</span>
                      </li>
                      <li>
                        <span className="">{item.text3}</span>
                      </li>
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
             {/* History art and culture */}


                     {/* GEOGRAPHY */}
        <section className="bg-white">
          <div className="max-w-[990px] mx-auto bg-white pb-8 ">
        
            <h1 className="my-4 text-center text-2xl text-sky-500">GEOGRAPHY</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-2 mx-2  ">
              {geography_faculty.map((item, index) => (
                <div
                  key={index}
                  className=" h-full flex flex-col  border-2 "
                >
                  <div className="max-w-full flex items-center  h-[250px]   my-4 overflow-hidden  px-2 py-2 ">
                    <img
                      className="h-full w-full object-cover border-2 border-gray-200"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
             <div className='border border-t-2'></div>
                  <div className=" my-2 px-4  ">
                    <p className="text-lg font-semibold text-sky-600 py-2">
                      {item.name}
                    </p>
                    <ul>
                      <li className="flex">
                        <span className="text-sm py-2">{item.text1}</span>
                      </li>
                      <li>
                        <span>{item.text2}</span>
                      </li>
                      <li>
                        <span className="">{item.text3}</span>
                      </li>
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
             {/* GEOGRAPHY */}


                            {/* POLITY*/}
        <section className="bg-white">
          <div className="max-w-[990px] mx-auto bg-white pb-8 ">
        
            <h1 className="my-4 text-center text-2xl text-sky-500">POLITY</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-2 mx-2  ">
              {polity_faculty.map((item, index) => (
                <div
                  key={index}
                  className=" h-full flex flex-col  border-2 "
                >
                  <div className="max-w-full flex items-center  h-[250px]   my-4 overflow-hidden  px-2 py-2 ">
                    <img
                      className="h-full w-full object-cover border-2 border-gray-200"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
             <div className='border border-t-2'></div>
                  <div className=" my-2 px-4  ">
                    <p className="text-lg font-semibold text-sky-600 py-2">
                      {item.name}
                    </p>
                    <ul>
                      <li className="flex">
                        <span className="text-sm py-2">{item.text1}</span>
                      </li>
                      <li>
                        <span>{item.text2}</span>
                      </li>
                      <li>
                        <span className="">{item.text3}</span>
                      </li>
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
             {/* POLITY*/}
              {/*  faculty card */}
      </>
    );
}
export default FacultyPanel;