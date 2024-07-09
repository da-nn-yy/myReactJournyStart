import { useCount } from "./useCount"
import './button.css'

const DanCount = () => {

  const {count,incr, decr ,restart} = useCount();

  return (
    <div>
  
      <h1>{count}</h1>

      <div style={{display:"flex",justifyContent:"center",gap:"3rem"}}>
        <button style={{backgroundColor:"blue"}} onClick={incr}>Increase</button>
        <button style={{backgroundColor:"red"}} onClick={decr}>Decrease</button>
        <button style={{backgroundColor:"green"}} onClick={restart}>Restart</button>
      </div>
    </div>
  )
}

export default DanCount
