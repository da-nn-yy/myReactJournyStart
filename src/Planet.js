const Planet = (props) => {
  return <div>
    <h1>{props.name}</h1>
  </div>
}

export default Planet;


//Lists 
// function App() {
//   const planets = [
//     {name: 'Mars', iGp:false },
//     {name: 'Earth', iGp:false },
//     {name: 'Jupiter', iGp:true },
//     {name: 'Venus', iGp:false },
//     {name: 'Neptune', iGp:true },
//     {name: 'Uranus', iGp:true },
//  ]
//   return (
//     <div className='App'>
     
//       {planets.map((planet) => {
//         return !planet.iGp && <Planet name = {planet.name} />
//       })}
//     </div>
//   )
// }
