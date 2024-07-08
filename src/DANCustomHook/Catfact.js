import { useCatFact } from './useCatFact';

export const Catfact = () => {

  // const {data:catFact,reftchData,isCatLoding} = useCatFact() 
  const {data,refetchData,isCatLoding} = useCatFact() 
  
  if (isCatLoding) return <h1>loading ... </h1>

  return (
    <div>
      {/* <h1>{catFact?.fact}</h1> */}
      <h1>{data?.fact}</h1>
      <button onClick={refetchData}>Refetch</button>
   </div>
   )
};