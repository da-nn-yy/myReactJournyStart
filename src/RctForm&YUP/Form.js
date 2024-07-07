export const Form = () => {
  return(
    <form style={{display:"flex"}}>
      <input type="text" placeholder="Full Name..."/>
      <input type="email" placeholder="Email..."/>
      <input type="text" placeholder="Age..."/>
      <input type="password" placeholder="Password..."/>
      <input type="password" placeholder="Confirm Passwod..."/>
      <input type="submit"/>
    </form>
  )
}