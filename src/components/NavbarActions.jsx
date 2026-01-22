const NavbarActions = ({ actions }) => {
  return (
    <div className="navbar-actions justify-content-end">
      {actions.map((action, index) => (
        <div key={index} className="navbar-action">
          {action.icon}
          <span className="d-none d-lg-inline">{action.text}</span>
        </div>
      ))}
    </div>
  );
};

export default NavbarActions;
