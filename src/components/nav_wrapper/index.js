import React from 'react'
import Sidebar from '../sidenav';
import Header from '../nav';
import { useState } from 'react';

const NavWrapper = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div  className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto ">
       
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">{children}</div>
          
        </div>
       
    </div>
  )
}

export default NavWrapper