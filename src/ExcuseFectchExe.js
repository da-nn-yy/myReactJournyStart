import Axios from "axios";
import { useState } from "react";
const ExcuseFetchExe = () => {
  const [genetratedExcuse,setGeneratedExcuse] = useState("")
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res => {
    setGeneratedExcuse(res.data[0].excuse)}))
  }
  
  return (
    <div>
     
      <h1>Get Excuse for:</h1>
      <div style={{margin:"50px", display:"flex",justifyContent:"space-between" }}>
        <button onClick={() => fetchExcuse("family")}>Family</button>
        <button onClick={() => fetchExcuse("office")}>Office</button>
        <button onClick={() => fetchExcuse("gaming")}>Gaming</button>
        <button onClick={() => fetchExcuse("collage")}>Collage</button>
        <button onClick={() => fetchExcuse("party")}>Party</button>
        <button onClick={() => fetchExcuse("funny")}>Funny</button>
        <button onClick={() => fetchExcuse("unbelieveble")}>Unbelieveble</button>
        <button onClick={() => fetchExcuse("developers")}>Developers</button>
        <button onClick={() => fetchExcuse("children")}>Children</button>
      </div>

      <p>{genetratedExcuse}</p>
    </div> 
    )
}

export default ExcuseFetchExe;