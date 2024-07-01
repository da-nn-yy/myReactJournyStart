import Axios  from "axios";
import { useState } from "react";
const Fetchingg = () => {
  
  const [name,setName] = useState("")
  const [predictedAge,setPredictedAge] = useState(null)
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data)
    })
  }
  return (
    <div>
      <input placeholder="name..." onChange={(event) => {setName(event.target.value)}}/>
      <button onClick={fetchData}>Pridict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Pridicted age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  )
}

export default Fetchingg;