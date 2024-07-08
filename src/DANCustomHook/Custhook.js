const { useState } = require("react")

export const Custhook = () => {
  const [isVisble,setIsVisisble] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisisble(!isVisble)}>  {isVisble ? "Hide" : "Show"}
      </button>
      {/* <button onClick={() => setIsVisisble((prev) => !prev)}>  {isVisble ? "Hide" : "Show"}</button> */}
      {isVisble &&<h1>Hi Danny</h1>}
    </>
  )
}