import {indianHistort,HISTORY_ART_CULTURE,geography_faculty,polity_faculty } from './facultyData'

const OptionalTeam=()=>{
    return(
        <>
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
        </>
    )
}
export default OptionalTeam;