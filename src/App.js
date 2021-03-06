import './App.css';
import Home from './Components/Home/Home';
import Background from './Components/Layout/Background';
import Header from './Components/Layout/Header';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import { useState,useEffect } from 'react';
import AvailableJobs from './Components/AvailableJobs/AvailableJobs';
import PostJob from './Components/PostJob/PostJob';
import LogoutPopup from './Components/LogoutPopup/LogoutPopup';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [ logoutClicked, setIsLogoutClicked ] = useState(false);
    
    useEffect(()=>{
      const item = localStorage.getItem("jwt");
        if(item)
          setIsLoggedIn(true);
        else  
          setIsLoggedIn(false);
      
    },[])

    const login = () =>{
        setIsLoggedIn(()=>true)
    }

    const logout = () =>{
      localStorage.clear();
      setIsLoggedIn(()=>false);
      setIsLogoutClicked(true);
    }
    setTimeout(() => {
      setIsLogoutClicked(false);
      console.log("5 sec")
    }, 5000);
  
  const logoutHandler = () =>{
    setIsLogoutClicked((prev)=>{
      return !prev;
    });
  }

  return (
      <Router>
        <Background />
        <Header isLoggedIn={isLoggedIn} onLogout={logout}/>
        <main>
          <Switch>
            <Route path="/" exact component={()=><Home isLoggedIn={isLoggedIn}/>}/>
            <Route path="/Login" component={()=><Login 
            onLogin={login} 
            isLoggedIn={isLoggedIn}/>}/>
            <Route path="/Signup" component={()=><Signup onLogin={login} isLoggedIn={isLoggedIn}/>}/>
            <Route path="/ForgotPassword" component={ForgotPassword}/>
            <Route path="/ResetPassword" component={ResetPassword}/>
            <Route path="/AvailableJobs" component={AvailableJobs}/>
            <Route path="/PostJobs" component={PostJob}/>
          </Switch>
        </main>
        {logoutClicked &&<LogoutPopup onLogout={logoutHandler}/>}
      </Router>
  );
}

export default App;
