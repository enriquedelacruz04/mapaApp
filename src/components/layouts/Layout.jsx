import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Header from "./Header";

function Layout() {
   const [openNav, setOpenNav] = useState(false);

   return (
      <>
      <div
            className={`fixed z-[5] h-full w-full lg:hidden bg-[#00a7b5] opacity-10 transition--transform-layout ${
               openNav ? "left-0" : "-left-full"
            }`}
            onClick={() => {
               setOpenNav(false);
            }}
         >
            <i
               className={`fa-solid fa-chevron-right text-xl transition--transform-layout ${
                  openNav && "rotate-[180deg]"
               }`}
            ></i>
         </div>
         <div className={`min-h-screen bg-slate-100 layout`}>
            <Header setOpenNav={setOpenNav} openNav={openNav} />
            <Navbar setOpenNav={setOpenNav} openNav={openNav} />

            <main
               className={`mt-20 mb-10 mx-2 transition--transform-layout ${!openNav && "lg:ml-0"}
               }`}
            >
               <Outlet />
            </main>
         </div>
      </>
   );
}

export default Layout;
