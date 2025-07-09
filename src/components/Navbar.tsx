import { Button } from "@/components/ui/button";
import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="flex justify-between items-center h-20 px-20">
      <Link to={"/"}>
        <img src="/images/logo.png" alt="" className="w-30 p-0 m-0" />
      </Link>
      <div className="flex items-center gap-20 font-bold text-2xl">
        <Button
          variant={"default"}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium cursor-pointer"
        >
          <Link to={"/personal-details"}>Create Resume</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
