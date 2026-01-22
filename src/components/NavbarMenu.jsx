const NavbarMenu = ({ menu }) => {
  return (
    <nav className="navbar-menu">
      {menu.map((item, index) => (
        <a key={index} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavbarMenu;
