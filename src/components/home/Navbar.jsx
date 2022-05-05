import FeatherIcon from "feather-icons-react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-transparent safe-areas">
      <div className="navbar-bg"></div>
      <div className="navbar-inner">
        <div className="left">
          <Link to="/" className="link icon-only newsman-notification external">
            <FeatherIcon icon="bell"></FeatherIcon>
            <span className="badge color-red">1</span>
          </Link>
        </div>
        <div className="left">
          <Link to="/" className="link icon-only newsman-notification external">
            <FeatherIcon icon="home"></FeatherIcon>
          </Link>
        </div>
        <div className="right">
          <span>Too<b>Sport</b></span>
          <Link to="/search" className="link icon-only external">
            <FeatherIcon icon="search"></FeatherIcon>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
