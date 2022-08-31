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
import MyRecipes from './components/MyRecipes/MyRecipes';
import CreateRecipe from './components/MyRecipes/CreateRecipe/CreateRecipe';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState, useMemo } from 'react';
import { UserContext } from './services/UserContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const value = useMemo(() => ({ loggedUser, setLoggedUser}), [loggedUser, setLoggedUser]);


  console.log(loggedUser);


  return (
    <UserContext.Provider value={ { loggedUser, setLoggedUser} }>
      <Router>
        <div className="App">
          <Navbar/>
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
              <Route exact path="/acc/my-recipes">
                <MyRecipes/>
              </Route>
              <Route exact path="/acc/my-recipes/create">
                <CreateRecipe/>
              </Route>


              {/* <ProtectedRoute>
                <MyProfile path='/acc/my-profile' isLoggedIn={loggedUser}  />
              </ProtectedRoute> */}


            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
