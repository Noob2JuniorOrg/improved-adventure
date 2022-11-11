function NavItem(props) {
  return (
    <a
      className="text-[15px] text-ecom-main hover:text-ecom-dark hover:border-b-4 border-ecom-accent pb-10"
      href={props.link}
    >
      {props.name}
    </a>
  );
}

export default NavItem;
