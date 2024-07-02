import { useContext } from "react"
import { AppContext } from "../StateMangeuseCon"
export const Home = () => {
  const {username} = useContext(AppContext)
  return <h1>This Home page is from {username}</h1>
}