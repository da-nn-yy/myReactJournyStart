import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Menu">Menu</Link>
        {/* <Link to="/profiles">Profiles</Link> */} {/* using for more profilrs using "useParams" function */}
      </div>
  );
}

export default Navbar;