'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';

const NavLinks = () => {
    const pathname = usePathname() ;
      const active = 'bg-green-800 text-white'
    return (
        <>
            <div className="hidden md:block ">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                {" "}
                <Link href="./" className={`link ${pathname === '/' ? `${active}` : ''}`}>
                  <RiHome2Line />
                  Home{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./timeline" className={`link ${pathname === '/timeline' ? `${active}` : ''}`}>
                  {" "}
                  <GoClock />
                  Timeline{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./stats" className={`link ${pathname === '/stats' ? `${active}` : ''}`}>
                  <FaChartLine /> Stats{" "}
                </Link>{" "}
              </li>
            </ul>


            
          </div>

          
          {/* dropdown menu */}

            <div className="dropdown ?block md:hidden mr-10">
              <div tabIndex={0} role="button" className="btn m-1"> <IoMenu /> </div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                {" "}
                <Link href="./" className={`link ${pathname === '/' ? `${active}` : ''}`}>
                  <RiHome2Line />
                  Home{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./timeline" className={`link ${pathname === '/timeline' ? `${active}` : ''}`}>
                  {" "}
                  <GoClock />
                  Timeline{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./stats" className={`link ${pathname === '/stats' ? `${active}` : ''}`}>
                  <FaChartLine /> Stats{" "}
                </Link>{" "}
              </li>
              </ul>
            </div>
        </>
    );
};

export default NavLinks;