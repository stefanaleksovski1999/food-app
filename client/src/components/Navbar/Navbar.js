import './Navbar.css';
import { UserContext } from "../../services/UserContext";
import { useContext } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';



const Navbar = (props) => {


    const { loggedUser, setLoggedUser } = useContext(UserContext);


    const handleLogOut = () => {
        setLoggedUser(null);
      
    };


    return (
        <div>
            <div className="navbarcontainer">
                <Link  to="/" className="a-tag">
                    <div className="navbaritem1">
                        <p className="logo1">Baby's</p>
                        <p className="logo2">food place</p>
                    </div>
                </Link>
              

               
                <div className= "navbaritem2">
                    <Link className="a-tag" to="/breakfast"><p>Breakfast</p></Link>
                    <span className="dot"></span>
                    <Link className="a-tag" to="/brunch"><p>Brunch</p></Link>
                    <span className="dot"></span>
                    <Link className="a-tag" to="/lunch"><p>Lunch</p></Link>
                    <span className="dot"></span>
                    <Link className="a-tag" to="/dinner"><p>Dinner</p></Link>
                </div>


                {loggedUser ? 
                    <div className="logged-items">
                        <Link to='/acc/my-recipes'><p className='my-recipes'>MY RECIPES</p></Link>
                        <span className="dot2"></span>
                        <Link to='/acc/my-profile'><p className='my-profile'>MY PROFILE</p></Link>
                        <span className="dot2"></span>
                        <Link to='/' onClick={handleLogOut}><p className="logout5">LOG OUT</p></Link>
                    </div> 
                        : 
                    <div className="navbaritem3">
                        <a href="/acc/login">
                            <button className="login" >Log in</button>
                        </a>
                             <p className="or">or</p>
                        <a href="/acc/create">
                            <button className="create-button" href="/acc/create">Create account</button>
                        </a>
                    </div> 
                }
                
                
            </div>
        </div> 
        
       
     );
}
 
export default Navbar;