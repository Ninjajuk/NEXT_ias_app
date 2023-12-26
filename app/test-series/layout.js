'use client'


import { usePathname } from 'next/navigation'
import Link from 'next/link'
import HomeLayout from '../page';

export default function TestSeriesLayout({
    children, 
  }) {

    const pathname=usePathname();
    return (
        <>
          <div className="max-w-[1200px] mx-auto ">
            <h1 className="text-4xl my-4">Test Series</h1>
            <div>
              <ul className="flex my-4">
                <li className={`mr-4 tracking-widest hover:text-red-700 border-b-2 hover:border-red-600  ${pathname === '/test-series/upsc-prelims-test-series' ? 'border-red-600' : ''} `}>
                  <Link href="/test-series/upsc-prelims-test-series">Prelims Test Series</Link>
                </li>
                <li className={`mr-4 tracking-widest hover:text-red-700 border-b-2 hover:border-red-600  ${pathname === '/test-series/upsc-mains-test-series' ? 'border-red-600' : ''} `}>
                  <Link href="/test-series/upsc-mains-test-series">Mains Test Series (GS & Optional)</Link>
                </li>
                <li className={`mr-4 tracking-widest hover:text-red-700 border-b-2 hover:border-red-600  ${pathname === '/test-series/anubhav' ? 'border-red-600' : ''} `}>
                  <Link href="/test-series/anubhav">Anubhav (All India Open Mock Test)</Link>
                </li>
              </ul>
            </div>
            {children}
          </div>
        </>
    );
  }