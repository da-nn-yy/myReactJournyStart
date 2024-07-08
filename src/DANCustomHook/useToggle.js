import { useState } from "react"
export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    // setState(!state);
    setState((prev) => !prev)
  }
  return [state,toggle];  //returning array  
  // return {state,toggle};  //returning object
}