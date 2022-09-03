import NavItem from './NavItem';
function Navigation(props) {
  return (
    <nav
      className={`${props.className} text-[15px] leading-[25px] flex flex-col items-center justify-between h-44 desktop:flex-row desktop:w-[380px] desktop:h-14`}
    >
      <NavItem title="About" />
      <NavItem title="Careers" />
      <NavItem title="Events" />
      <NavItem title="Products" />
      <NavItem title="Support" />
    </nav>
  );
}

export default Navigation;
