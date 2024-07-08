import { useCatFact } from './useCatFact';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

export const Catfact = () => {

  // const {data:catFact,reftchData,isCatLoding} = useCatFact() 
  const {data,refetchData,isCatLoding} = useCatFact() 
  
   const client = new QueryClient();
  if (isCatLoding) return <h1>loading ... </h1>

  return (

    <div>
      <QueryClientProvider client={client}>
        <div>
          {/* <h1>{catFact?.fact}</h1> */}
          <h1>{data?.fact}</h1>
          <button onClick={refetchData}>Refetch</button>
        </div>
      </QueryClientProvider>
      
    </div>
  )
};