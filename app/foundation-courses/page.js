
import {PreMains} from './coursesdata'


export default function FoundationCourses(){
    return (
      <>
        <section>
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-4xl my-4">General Studies Courses</h1>
            <div>
              <ul className="flex my-4">
                <li className="pr-4 tracking-widest hover:text-red-700 border-b-2 hover:border-red-600 z-10">
                  <a href="">Pre Cum Main Foundation Courses</a>
                </li>
                <li className="px-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                  <a href="">Prelims</a>
                </li>
                <li className="px-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                  <a href="">Mains</a>
                </li>
                <li className="px-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                  <a href="">First Step</a>
                </li>
                <li className="px-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                  <a href="">More Courses</a>
                </li>
              </ul>
            </div>
            <p className="py-4">
              General Studies is an important section in the UPSC CSE as it
              covers a major portion of the syllabus. A thorough preparation
              plan is necessary for General Studies in order to cover the
              extensive syllabus in a timely manner. Given this, NEXT IAS
              General Studies Foundation courses, Prelims courses and Mains
              Advance courses for UPSC Civil Services Examination become useful
              as they help students gain a competitive edge in the examination.
            </p>
            <h1 className="text-lg py-4">Pre Cum Main Foundation Courses</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
              {PreMains.map((item) => (
                <a href="">
                  <div className="h-[400px] bg-gray-200 flex flex-col rounded-md shadow-md">
                    <div className="bg-red-400 h-2/5 w-full">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover"
                        alt={item.title}
                      />
                    </div>
                    <div className="bg-gray-100 h-3/5 flex flex-col">
                      <h1 className="my-4 px-4 text-2xl">{item.title}</h1>
                      <p className="flex items-center px-4">
                        <span className="text-lg">{item.icon}</span>
                        <span className="px-4">{item.para1}</span>
                      </p>
                      <p className="flex items-center px-4 py-2">
                        {" "}
                        <span className="text-lg">{item.icon2}</span>
                        <span className="px-4">{item.para2}</span>
                      </p>
                      <p className="flex items-center px-4 py-2">
                        <span className="text-lg">{item.icon3}</span>
                        <span className="px-4">{item.para3}</span>
                      </p>
                      <div className="mt-auto">
                        <button className="w-1/2 bg-blue-400 px-4 py-2 text-white">
                          Offline
                        </button>
                        <button className="w-1/2 bg-white px-4 py-2 border-2 border-blue-600 text-blue-600">
                          online
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <p className="py-4">
              These General Studies courses thoroughly prepare aspirants for
              both the Prelims and Mains stages of the UPSC CSE. We focus on
              providing the right guidance and building a strong foundation
              through our meticulously designed courses for Civil Services
              Examination to aspirants. These courses serve as a complete
              preparation roadmap for UPSC Civil Services Examination (CSE).
            </p>
            <p className="py-4">
              They are centered around developing and enhancing problem-solving,
              analytical thinking, and effective answer-writing abilities which
              will help aspirants to excel in the UPSC CSE. Additionally, our
              courses are well-organized ensuring students are always in line
              with their preparation as per the latest trend of UPSC CSE
              syllabus.
            </p>
            <div>
              <p className="flex items-center my-4">
                Other Courses:
                <span className="flex flex-wrap gap-4 px-4">
                  <button className="py-2 px-4 border-2 border-sky-400 hover:bg-sky-600 text-blue-800 hover:text-white">
                    Optional Courses
                  </button>
                  <button className="py-2 px-4 border-2 border-sky-400 hover:bg-sky-600 text-blue-800 hover:text-white">
                    Interview Guidance Program
                  </button>
                  <button className="py-2 px-4 border-2 border-sky-400 hover:bg-sky-600 text-blue-800 hover:text-white">
                    Postal Courses
                  </button>
                </span>
              </p>
            </div>
          </div>
        </section>
      </>
    );
    
}