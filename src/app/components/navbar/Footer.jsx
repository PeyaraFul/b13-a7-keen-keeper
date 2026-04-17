import Link from "next/link";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-green-950 text-primary-content p-10 mt-20">
        <aside className="text-center">
          <h1 className="text-4xl font-bold">KeenKeeper</h1>
          <p className="font-semibold">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>

        <nav className="text-center mt-6">
          <h3 >Social Link</h3>
          <div className="flex justify-center gap-4 mt-1">
            <Link href="./">
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </Link>
            <Link href="https://www.facebook.com/arakash022" target="_blank">
              {" "}
              <FaFacebook></FaFacebook>{" "}
            </Link>
            <Link href="./">
              {" "}
              <FaXTwitter></FaXTwitter>{" "}
            </Link>
          </div>
        </nav>
        <div className="flex w-full flex-col -mt-12 ">
          <div className="divider"></div>
        </div>

        <div className="flex justify-around mt-10">
          <div>
            {" "}
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li> <Link href='/'>Privacy Policy </Link> </li>
              <li> <Link href='/'>Terms of Service </Link> </li>
              <li> <Link href='/'>Cookies </Link> </li>
              
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
