import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";
import navbarData from "./navbardata";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="row align-items-center py-3">

          <div className="col-6 col-md-3">
            <NavbarBrand brand={navbarData.brand} />
          </div>

          <div className="col-md-6 d-none d-md-flex justify-content-center">
            <NavbarMenu menu={navbarData.menu} />
          </div>

          <div className="col-6 col-md-3">
            <NavbarActions actions={navbarData.actions} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
