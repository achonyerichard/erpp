import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          {/* Header: Right side */}
          <ul className="flex items-center justify-center space-x-[200px]">
        <li className='flex'>
            <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className='shrink-0 h-4 w-4 fill-red-500' viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>
          
          </span>
          <p className='text-lg   text-[#707070] font-medium'>Notifications</p>
        </li>
        <li className="cursor-pointer">
          <p className='text-lg pr-3  text-[#707070] font-medium'> Settings</p>
        </li>

        <div className="relative inline-block">
           
          <div className="drop-button text-black flex items-center justify-center cursor-pointer">
          <p className='text-lg  pr-5 text-[#707070] font-medium'>My Account</p>
            <img
              className="w-[62px] h-[62px] rounded-full object-cover"
              src={
               
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="Rounded avatar"
            ></img>
            <span className="text-tertiary ml-3 mr-[4px]">
              
            </span>
            <svg
              className="h-3 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          <div
            id="myDropdown"
            className="dropdownlist absolute bg-white text-black right-0 mt-3 p-3 overflow-auto z-30 invisible"
          >
            <input
              type="text"
              className="drop-search p-2 text-gray-600"
              placeholder="Search.."
              id="myInput"
            ></input>
            <a
              href="#"
              className="p-2 hover:bg-white text-black text-sm no-underline hover:no-underline block"
            >
              <i className="fa fa-user fa-fw"></i> Profile
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white text-black text-sm no-underline hover:no-underline block"
            >
              <i className="fa fa-cog fa-fw"></i> Settings
            </a>
            <div className="border border-gray-800"></div>
            <a
              href="#"
              className="p-2 hover:bg-white text-black text-sm no-underline hover:no-underline block"
            >
              <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
            </a>
          </div>
        </div>
      </ul>


        </div>
      </div>
    </header>
  );
}

export default Header;