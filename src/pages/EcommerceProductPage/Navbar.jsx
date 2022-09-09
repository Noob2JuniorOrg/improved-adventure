import NavItem from './NavItem';

function Navbar() {
  return (
    <div className="hidden desktop:inline-flex ml-12 w-[397px] justify-between">
      <NavItem name="Collections" />
      <NavItem name="Men" />
      <NavItem name="Women" />
      <NavItem name="About" />
      <NavItem name="Contact" />
    </div>
  );
}

export default Navbar;
