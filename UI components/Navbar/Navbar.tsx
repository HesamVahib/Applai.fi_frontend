import NavbarItems from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {

  return (
    <div>
      <nav className="relative py-3 px-2 flex justify-between items-center bg-background border-b border-[var(--color-stroke)] dark:bg-[var(--color-background)] dark:border-[var(--color-stroke)] ">
        <NavbarLogo />
        <NavbarItems />
      </nav>
    </div>
  );
}
