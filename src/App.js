import  "./Assets/style/main.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { Provider } from "./Context";
import Footer from "./Conatiner/footer/footer";
import Header from "./Conatiner/Header/Header";
import ElectronicsPage from "./Pages/ElectronicsPage/ElectronicsPage";
import Singlepage from "./Pages/Singlepage/Singlepage";
import Registr from "./Pages/Auth/Registr";
import Login from "./Pages/Auth/login";
import { useState } from "react";
import GuestPage from "./Pages/GuestPage/GuestPage";
import Update from "./Pages/Update/Update";
import Privatepage from "./Pages/Privatepage/Privatepage";
import Profile from "./Pages/Auth/Profile";
import Notfound from './Pages/notfound/notfound'


function App() {
 const [token,setToken] = useState(window.localStorage.getItem("token"))
  return (
    <Provider>
        <Router>
      <div className="App">
       <Header/>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/computer" component={ElectronicsPage} />
          <Route exact path="/product/:id/" component={ Singlepage }/>
          <Route path="*" component={Notfound}/>
          <Privatepage token={token} path="/update" component={Update} />
          <Privatepage token={token} path="/profile" component={Profile} />
          <GuestPage token={token} path="/registr" component={Registr}/>
          <GuestPage token={token} render={()=> <Login setItem1={setToken}/>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
    </Provider>

  );
}

export default App;
