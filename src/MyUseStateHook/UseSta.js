import { useState } from "react"

 const UseSta = () => {
//  const [textColor,setTextColor] = useState("") ;

//  return (
  
//  <div>
//    {/* <button onClick={hi}>Show/Hide</button> {/* with external function */}
//       {/* <button onClick={() => { setShowText(!showText)}} >Show/Hide</button> with internal function */}
//       {/* {showText === true && <h1>Hey my name is Danny</h1>} */}
//       <button onClick={() => {
//         setTextColor("red")
//       }}>change color</button>
//       <h1 style={{color: textColor}}>My name is Danny</h1>
//  </div>

//   )

  const [count,setCount]  = useState(0);

  const inc = () => {
    setCount(count + 1)
  }
   const decr = () => {
    setCount(count - 1)
  }
   const zer = () => {
    setCount(0)
  }


  return (
    <div>
      <button onClick={inc}>Increase</button>
      <button onClick={decr}>decrese</button>
      <button onClick={zer}>back to zero</button>
      {count}
    </div>)
 }

 export default UseSta;