import { useState } from "react";


// export const useCount = (instialVal = 0) => {
export const useCount = () => {
  
  const[count,setCount] = useState();
  // const[count,setCount] = useState(intialVal);


  const incr = () => {
    setCount(count + 1);
    // setCount((prev => prev + 1))
  }
  const decr = () => {
    setCount(count - 1);
    // setCount((prev => prev - 1))

  }
  const restart = () => {
    setCount(0);
  }

  return {count,incr,decr,restart}
};
