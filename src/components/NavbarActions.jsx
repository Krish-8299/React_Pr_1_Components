const NavbarActions = () => {
  return (
    <div className="navbar-actions justify-content-end">
      {/* {actions.map((action, index) => ( */}
        <div className="navbar-action">
          <i class="ri-search-line"></i> 
        </div>
        <div className="navbar-action">
          <i class="ri-user-line"></i>
        </div>
        <div className="navbar-action">
          <i class="ri-shopping-bag-line"></i>
        </div>
      {/* ))} */}
    </div>
  );
};

export default NavbarActions;
