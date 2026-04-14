import Link from "next/link";
import { Image } from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXRay, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            
            <footer className="footer footer-horizontal footer-center bg-green-950 text-primary-content p-10 h-70">
  <aside>
   <h1 className="text-4xl font-bold">KeenKeeper</h1>
    <p className="font-semibold">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <Link href="./"> <FaInstagram></FaInstagram> </Link>
     <Link href="https://www.facebook.com/arakash022" target="_blank"> <FaFacebook></FaFacebook>  </Link>
     <Link href="./"> <FaXTwitter></FaXTwitter> </Link>
    </div>
  </nav>
   <div className="flex w-full flex-col -mt-12 ">
  <div className="divider"></div>
</div>

  <div className="flex gap-120">
   <div> <p>Copyright © {new Date().getFullYear()} - All right reserved</p></div>
  <div>
    <ul className="flex gap-4">
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Cookies</li>
  </ul>
  </div>
  </div>

</footer>
      

        </div>
    );
};

export default Footer;