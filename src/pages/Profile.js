// import { useNavigate ,useParams } from "react-router-dom";  //Help us for Route using useNavigate function. .....AND .... using useParams for different profiles..example: .com/Profile/user
import React from 'react'
import { ChangeProfile } from '../Components/ChangeProfile'
import { useContext } from "react"
import { AppContext } from "../StateMangeuseCon"

function Profile(props) {
  // let navigate = useNavigate()   /// function for navigate
  // let {username} = useParams()   /// function for useParams
  const {username} = useContext(AppContext)
  return (
    <div>

       {/* <h1> Profile  {username}</h1>  */}
  {/* <button onClick={() => navigate('/home')}>Go to Home page</button> */} {/*This is useNavigate use */}

      <h1>This Profile is from {username}</h1>
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  )
}

export default Profile
