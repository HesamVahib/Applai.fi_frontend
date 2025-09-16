import NavbarItems from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {

  return (
    <div>
      <nav className="relative bg-gray-800 py-1.5 px-2 flex justify-between items-center">
        <NavbarLogo />
        <NavbarItems />
      </nav>
    </div>
  );
}
