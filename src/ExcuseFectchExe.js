import Axios from "axios";
import { useState } from "react";
const ExcuseFetchExe = () => {
  const [excuse,setExcuse] = useState("")

  const fetchExcuse = () => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res => {
    console.log(res.data)
  }));
  

  return (
    <div>
     
      <h1>Get Excuse for:</h1>
      <div style={{margin:"50px", display:"flex",justifyContent:"space-between" }}>
        <button onClick={fetchExcuse}>Family</button>
        <button>Office</button>
        <button>Gaming</button>
      </div>

      <p></p>
    </div> 
    )
}
}
export default ExcuseFetchExe;