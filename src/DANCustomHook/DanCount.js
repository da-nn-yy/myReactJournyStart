import { useCount } from "./useCount"

const DanCount = () => {

  const {count,incr, decr ,restart} = useCount();

  return (
    <div>
      
      <h1>{count}</h1>

      <button onClick={incr}>Increase</button>
      <button onClick={decr}>Decrease</button>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default DanCount
