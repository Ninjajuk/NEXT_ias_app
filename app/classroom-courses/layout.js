'use client'


import { usePathname } from 'next/navigation'
import Link from 'next/link'
import HomeLayout from '../page';

export default function DashboardLayout({
    children, 
  }) {

    const pathname=usePathname();
    return (
      <HomeLayout>
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl my-4">General Studies Courses</h1>
          <div className="my-4">
            <ul className="flex flex-wrap w-full my-4 ">
              <li
                className={`pr-4 tracking-widest hover:text-red-700  hover:border-red-600  ${
                  pathname === "/classroom-courses/foundation-courses"
                    ? "border-b-2 border-red-600 font-semibold text-red-700"
                    : ""
                } `}
              >
                <Link href="/classroom-courses/foundation-courses">
                  Pre Cum Main Foundation Courses
                </Link>
              </li>
              <li
                className={`pr-4 tracking-widest hover:text-red-700  hover:border-red-600  ${
                  pathname === "/classroom-courses/prelims-courses"
                    ? "border-b-2 border-red-600 font-semibold text-red-700"
                    : ""
                } `}
              >
                <Link href="/classroom-courses/prelims-courses">Prelims</Link>
              </li>
              <li
                className={`pr-4 tracking-widest hover:text-red-700  hover:border-red-600  ${
                  pathname === "/classroom-courses/mains-courses"
                    ? "border-b-2 border-red-600 font-semibold text-red-700"
                    : ""
                } `}
              >
                <Link href="/classroom-courses/mains-courses">Mains</Link>
              </li>
              <li className="pr-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                <a href="">First Step</a>
              </li>
              <li className="pr-4 tracking-widest hover:text-red-700 hover:border-b-2 hover:border-red-600 z-10">
                <a href="">More Courses</a>
              </li>
            </ul>
          </div>
          <p className="py-4">
            General Studies is an important section in the UPSC CSE as it covers
            a major portion of the syllabus. A thorough preparation plan is
            necessary for General Studies in order to cover the extensive
            syllabus in a timely manner. Given this, NEXT IAS General Studies
            Foundation courses, Prelims courses and Mains Advance courses for
            UPSC Civil Services Examination become useful as they help students
            gain a competitive edge in the examination.
          </p>
        </div>

        {children}
        
        <div className="max-w-[1200px] mx-auto">
          <p className="py-4">
            These General Studies courses thoroughly prepare aspirants for both
            the Prelims and Mains stages of the UPSC CSE. We focus on providing
            the right guidance and building a strong foundation through our
            meticulously designed courses for Civil Services Examination to
            aspirants. These courses serve as a complete preparation roadmap for
            UPSC Civil Services Examination (CSE).
          </p>
          <p className="py-4">
            They are centered around developing and enhancing problem-solving,
            analytical thinking, and effective answer-writing abilities which
            will help aspirants to excel in the UPSC CSE. Additionally, our
            courses are well-organized ensuring students are always in line with
            their preparation as per the latest trend of UPSC CSE syllabus.
          </p>
          <div>
            <p className="flex items-center my-4">
              Other Courses:
              <span className="flex flex-wrap gap-4 px-4">
                <button className="py-2 px-4 ring-1 ring-sky-500 hover:bg-sky-600 text-blue-800 hover:text-white">
                  Optional Courses
                </button>
                <button className="py-2 px-4 ring-1 ring-sky-500 hover:bg-sky-600 text-blue-800 hover:text-white">
                  Interview Guidance Program
                </button>
                <button className="py-2 px-4 ring-1 ring-sky-500 hover:bg-sky-600 text-blue-800 hover:text-white">
                  Postal Courses
                </button>
              </span>
            </p>
          </div>
        </div>
      </HomeLayout>
    );
  }