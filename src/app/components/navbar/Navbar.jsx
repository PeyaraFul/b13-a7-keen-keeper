import Image from "next/image";
import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (

      <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl"> KeenKeeper </a>
          </div>
          <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                {" "}
                <Link href="./">
                  <RiHome2Line />
                  Home{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./timeline">
                  {" "}
                  <GoClock />
                  Timeline{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="./stats">
                  <FaChartLine /> Stats{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
   
  );
};

export default Navbar;
