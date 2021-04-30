import { Redirect, Route } from "react-router";

const Privatepage = ( props)=> {
  const {token} = props;
  return (
     <>
      {token ? (
        <Route {...props}/>
      ) :(
        <Redirect to="/login"/>
      )}
     </>
  )
}
export default Privatepage;