import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};