const NavbarBrand = ({ brand }) => {
  return (
    <div className="navbar-brand">
      <img src={brand.logo} alt={brand.name} />
      <span className="d-none d-sm-inline">{brand.name}</span>
    </div>
  );
};

export default NavbarBrand;
