import { Redirect, Route } from "react-router";

const GuestPage = (props) => {
const{token} = props;
  return (
   <> {
     token ? (
       <Redirect to="/"/>
     ): (<Route {...props}/>)
   } </>

  )
}
export default GuestPage;