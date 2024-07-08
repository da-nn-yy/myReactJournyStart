import { useQuery } from "@tanstack/react-query";
import Axios  from "axios";


export const useCatFact = () => {

  const { data,refetch ,isLoading: isCatLoading ,error } = useQuery(
      {queryKey:["cat"], 
      queryFn:async () => {
      return Axios.get("http://catfact.ninja/fact").then((res) => res.data);
    }})

    const refetchData = () => {
      alert("Data Refetched");
      refetch();
    }   
    if (error) {
    return <div>Error loading cat fact</div>;
  }

  return { data ,refetchData,isCatLoading,error}
}
