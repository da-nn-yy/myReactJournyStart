// import { useNavigate ,useParams } from "react-router-dom";  //Help us for Route using useNavigate function. .....AND .... using useParams for different profiles..example: .com/Profile/user
import React from 'react'

function Profile() {
  // let navigate = useNavigate()   /// function for navigate
  // let {username} = useParams()   /// function for useParams
  return (
    <div>

      <h1>Profile {/*{username}*/}</h1>
  {/* <button onClick={() => navigate('/home')}>Go to Home page</button> */} {/*This is useNavigate use */}
    </div>
  )
}

export default Profile
