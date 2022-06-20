import './Navbar.css';

const Navbar = (props) => {
    return (
        <div>
            <div className="navbarcontainer">
                <a className="a-tag" href="/">
                    <div className="navbaritem1">
                        <p className="logo1">Baby's</p>
                        <p className="logo2">food place</p>
                    </div>
                </a>
              

               
                <div className= "navbaritem2">
                    <a className="a-tag" href="/breakfast"><p>Breakfast</p></a>
                    <span className="dot"></span>
                    <a className="a-tag" href="/brunch"><p>Brunch</p></a>
                    <span className="dot"></span>
                    <a className="a-tag" href="/lunch"><p>Lunch</p></a>
                    <span className="dot"></span>
                    <a className="a-tag" href="/dinner"><p>Dinner</p></a>
                </div>
                <div className="navbaritem3">
                    <a href="/acc/login">
                     <button className="login" >Log in</button>
                    </a>
                    <p className="or">or</p>
                    <a href="/acc/create">
                     <button className="create-button" href="/acc/create">Create account</button>
                    </a>
                </div>
                
            </div>
        </div> 
        
       
     );
}
 
export default Navbar;