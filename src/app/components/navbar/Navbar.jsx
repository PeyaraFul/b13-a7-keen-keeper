import NavLinks from "./links/NavLinks";

const Navbar = () => {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">
            Keen<span className="text-green-900 -ml-1.5">Keeper</span>
          </a>
        </div>

        <NavLinks></NavLinks>
      </div>
    </div>
  );
};

export default Navbar;
