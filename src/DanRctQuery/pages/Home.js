import { useQuery } from "@tanstack/react-query"
import Axios from "axios";


export const Home = () => {
  const { 
    data: catData,
     isLoading ,
     isError ,
     refetch} = useQuery({
    queryKey:["cat"], 
    queryFn:() => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  if (isLoading) {return <div>Loading...</div>;}
  
  if(isError) {
    return <h1>Sorry,there was an error</h1>;
  }

  
  return (
    <div>
      <h1>This is Home Page <p>{catData?.fact}</p></h1>
      <button onClick={refetch}>Update Data</button>
    </div>
  )
}
/* HTML: <div class="loader"></div> */
