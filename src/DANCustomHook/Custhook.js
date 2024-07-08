const { useState } = require("react")

export const Custhook = () => {
  const [isVisble,setIsVisisble] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisisble((prev)=> !prev )}>  {isVisble ? "Hide" : "Show"}
      </button>
      {isVisble &&<h1>Hidden Text</h1>}
    </>
  )
}