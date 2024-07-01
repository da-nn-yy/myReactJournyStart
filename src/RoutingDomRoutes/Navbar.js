import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
        <Link to="/Home">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/profiles">Profiles</Link> */} {/* using for more profilrs using "useParams" function */}
        <Link to="/Contact">Contact</Link>
      </div>
  );
};