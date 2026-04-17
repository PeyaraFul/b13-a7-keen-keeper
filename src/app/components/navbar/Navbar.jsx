
import NavLinks from "./links/NavLinks";

const Navbar = () => {
  

  return (

      <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl"> KeenKeeper </a>
          </div>

          {/* <div className="md:hidden "> */}
            <NavLinks></NavLinks>
          {/* </div> */}
          

        </div>
      </div>
   
  );
};

export default Navbar;
