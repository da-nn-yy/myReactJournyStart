import { useCatFact } from './useCatFact';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

export const Catfact = () => {

  // const {data:catFact,reftchData,isCatLoding} = useCatFact() 
  const {data,reftchData,isCatLoding} = useCatFact() 
  
   const client = new QueryClient({defaultOptions:
    {
      queries:{
        // refetchOnWindowFocus:true, //if its true teh page will fetch another data while i go from one tab another tab
        refetchOnWindowFocus:false, //if its false the page doesnt fetch another data 
      }
    }
  });
  if (isCatLoding) return <h1>loading ... </h1>

  return (
    <QueryClientProvider client={client}>
      {/* <h1>{catFact?.fact}</h1> */}
      <h1>{data?.fact}</h1>
      <button onClick={reftchData}>Refetch</button>
    </QueryClientProvider>
    
  )
}