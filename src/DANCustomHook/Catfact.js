import { useCatFact } from './useCatFact';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
export const Catfact = () => {
  
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <h1>{catData?.fact}</h1>
    </QueryClientProvider>
    
  )
}