import { Link } from "react-router-dom";
export const NavbarSS = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};