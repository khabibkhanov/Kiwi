import { createContext, useContext, useState } from "react";

const Context = createContext()
const Provider = ({children}) => {
  const [state,setState] = useState("")
  const [adding1, setAdd] = useState(window.localStorage.getItem("add") || false)
  return (
    <Context.Provider value={{state,setState,adding1,setAdd}}>
      {children}
    </Context.Provider>
  )
}
const Docontext = () => {
  const {state,setState,adding1,setAdd} = useContext(Context)
  return {state,setState,adding1,setAdd}
}
export {
  Provider,
  Docontext
}