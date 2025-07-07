import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20 px-20">
      <img src={Logo} alt="" className="w-30 p-0 m-0" />
      <div className="flex items-center gap-20 font-bold text-2xl">
        <p>Templates</p>
        <p>Examples</p>
        <Button
          variant={"default"}
          className="bg-green-500 h-12 cursor-pointer text-md font-bold transition active:scale-95 hover:bg-green-400"
        >
          <NavLink to={"/personal-details"}>Create Resume</NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
