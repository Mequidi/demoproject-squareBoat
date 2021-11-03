import './App.css';
import Home from './Components/Home/Home';
import Background from './Components/Layout/Background';
import Header from './Components/Layout/Header';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
function App() {
  return (
    <>
      <Background/>
      <Router>
        <Header/>
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/ForgotPassword" component={ForgotPassword}/>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
