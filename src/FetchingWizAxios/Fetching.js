import Axios from "axios";
import { useEffect, useState } from "react";

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
// console.log(data)
// })

const Fetching = () => {
  const [catFact,setCatFact] = useState("")

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
      // console.log(res.data)
    })
  }
  useEffect(() => {
    fetchCatFact();
  },[])
  return (
    <div>
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default Fetching;