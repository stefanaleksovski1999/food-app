import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Breakfast from './components/Breakfast/Breakfast';
import Brunch from './components/Brunch/Brunch';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import MyProfile from './components/MyProfile/MyProfile';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <Navbar userLogged={isLoggedIn} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/breakfast">
              <Breakfast/>
            </Route>
            <Route exact path="/brunch">
              <Brunch/>
            </Route>
            <Route exact path="/lunch">
              <Lunch/>
            </Route>
            <Route exact path="/dinner">
              <Dinner/>
            </Route>
            <Route exact path="/acc/login">
              <Login/>
            </Route>
            <Route exact path="/acc/create">
              <Register/>
            </Route>
            <Route exact path="/acc/my-profile">
              <MyProfile/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
