import "./Login.css"
import React, { useContext, useState } from 'react'
import { UserContext } from "../../../services/UserContext";
import { Redirect } from "react-router-dom";
import * as EmailValidator from 'email-validator';

const Login = (props) => {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loggedUser, setLoggedUser } = useContext(UserContext);
    // const { loggedUser, setLoggedUser } = useContext(UserContext);
    const [ isLoggedIn, setIsLoggedIn] = useState(false);


    EmailValidator.validate(email);


      const login = (e) => {
        e.preventDefault();


        const data = { email, password };

        fetch('http://localhost:3000/accounts/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => res.json())
          .then ((data) => {
            if (data.message === "You have logged in succesfully") {
              setIsLoggedIn(true)              
              setLoggedUser(data);
            }else {
              console.log('invalid email or password');
              alert("Invalid email or password");
            }
            // setLoggedUser(data.account);
            
          });

          

      };

      if (isLoggedIn) {
        return <Redirect to={`/`} />
      }       
    return (
      <div className="container" >
        <div className="login-line">
          <h1 className="title"> <span className="adding-line">Log In</span> </h1>
          
        </div>
        
        <div className="content">
          <div className="welcome">
            <h1 className="welcome-title">Welcome to <span className="color-change">Baby's</span></h1>
            <p className="txt">Lorem Ipsum is simply dummy text of the een the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s witore recently with desktop publishin</p>
          </div>
          <form className="form-control"> 
            <div className="email-control">
              <label className="input-name">Email</label>
              <input
                className="input-control"
                type="email"
                onChange={(e) => {
                setEmail(e.target.value);
                }}
              />
            </div>
            <div className="pass-control">
              <label className="input-name">Password</label>
              <input
                className="input-control"
                type="password"             
                onChange={(e) => {
                setPassword(e.target.value);
                }}
              />
            </div>
          
            <button className="login-button2" onClick={login}> Login </button>
          </form>

        </div>
                
      </div>
      
    )
}
 
export default Login;