'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { RiHome2Line } from 'react-icons/ri';

const NavLinks = () => {
    const pathname = usePathname() ;
      const active = 'bg-green-800 text-white'
    return (
        <>
            <div className="flex-none ">
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
        </>
    );
};

export default NavLinks;