function NavItem(props) {
  return (
    <button className="hover:border-b-2 h-10 w-6">
      <p className="-mx-4">{props.title}</p>
    </button>
  );
}

export default NavItem;
