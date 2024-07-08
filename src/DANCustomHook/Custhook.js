import { useToggle } from "./useToggle";

export const Custhook = () => {
  const [isVisble,toggle] = useToggle();
  const [isVisble2,toggle2] = useToggle();

  // const {state , toggle}  = useToggle();   //returning object method instead of array
  ///// or///// 
  // cons {state:isVisble,toggle} = useToggle();


  return (
    <>
      <button onClick={toggle}>  {isVisble ? "Hide" : "Show"}
      </button>
      {isVisble &&<h1>Hi Danny</h1>}
      <button onClick={toggle2}>  {isVisble2 ? "Hide" : "Show"}
      </button>
      {/* <button onClick={() => setIsVisisble((prev) => !prev)}>  {isVisble ? "Hide" : "Show"}</button> */}
      {isVisble2 &&<h1>Hi Bemny</h1>}

      {/* <button onClick={toggle}>  { state? "Hide" : "Show"}</button>
      {state &&<h1>Hi Danny</h1>}  */}  {/* using object hook instade of array */}
    </>
  )
}