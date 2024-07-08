import { useCatFact } from './useCatFact';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

export const Catfact = () => {

  const {data:catFact,reftch,isLoding} = useCatFact()
  
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <h1>{catFact?.fact}</h1>
    </QueryClientProvider>
    
  )
}