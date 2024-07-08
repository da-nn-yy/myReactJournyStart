import { useState } from "react";



export const useCount = () => {
  
  const[count,setCount] = useState(0);

  const incr = () => {
    setCount(count + 1)
  }
  const decr = () => {
    setCount(count - 1)
  }
  const restart = () => {
    setCount(0)
  }

  return {incr,decr,restart}
}
