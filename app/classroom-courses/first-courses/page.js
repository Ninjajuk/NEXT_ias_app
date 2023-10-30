'use client'
import React, { useState } from 'react';
import './style.css'
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    // alert('Hi Samsu')
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className=" h-screen bg-red-400">
      <div id="mySidenav" className={`sidenav bg-sky-300 ${isOpen ? 'w-[250px] ' : 'w-0'}`}>
        <a  className="closebtn" onClick={closeNav}>close;</a>
        <a href="/" className="sidebar-link">About</a>
        <a href="/" className="sidebar-link">Services</a>
        <a href="/" className="sidebar-link">Clients</a>
        <a href="/" className="sidebar-link">Contact</a>
      </div>

      <main className="ml-0 sm:ml-64 p-4">
        <h2 className="text-2xl txt1">Animated Sidebar Example</h2>
        <p>Click on the button to open the sidebar.</p>
        <span className="text-3xl cursor-pointer" onClick={openNav}>&#9776; open</span>
      </main>
    </div>
  );
}
export default Sidebar;