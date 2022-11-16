import "./Register.css"
import React, { useState, useContext } from 'react'
import { Redirect } from "react-router";
import { UserContext } from "../../../services/UserContext";
import * as yup from 'yup';
import { userSchema } from "../Validation/UserValidation";

// import { Redirect } from "react-router";
// import Home from "../../Home/Home";

const Register = (props) => {
  
    const { setLoggedUser } = useContext(UserContext);
    const [ isLoggedIn, setIsLoggedIn] = useState(false);

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [dateOfBirth, setDate] = useState(new Date())
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userCreated, setUserCreated] = useState(false);


      const register = (e) => {
        e.preventDefault();

        // let formData = {
        //   name: e.target[0].value,
        //   email: e.target[1].value,
        //   password: e.target[2].value
        // // };
        // console.log(formData);

        const data = {first_name, last_name, dateOfBirth, email, password };
        const loginData = {email, password};


        const loginPost = () => {fetch('http://localhost:3000/accounts/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData)
        }).then(res => res.json())
          .then ((data) => {
            setLoggedUser(data);
            setIsLoggedIn(true);
        });} 

        fetch('http://localhost:3000/accounts/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => res.json())
          .then ((data) => {
            console.log(data);
            setUserCreated(true);
            if(!data.error){
              loginPost()
            }else{
              alert(data.message)
            }
        });

        
          
        

      };
      
      // tuka treba da napravam redirect dokolku se kreira acc.
      // const notify = () => toast("Wow so easy!");

      if (isLoggedIn) {
        return <Redirect to={{
                          pathname: '/',
                          state: {isLoggedIn}
                        }} 
                />
      }    
    return (
      <div className="container" >
        <div className="login-line">
          <h1 className="title"> <span className="adding-line">Create account</span> </h1>
          
        </div>
        
        <div className="content">
          <div className="welcome">
            <h1 className="welcome-title">Create your <span className="color-change">account</span></h1>
            <p className="txt">Lorem Ipsum is simply dummy text of the een the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s witore recently with desktop publishin</p>
          </div>
          <div className="form-control2"> 
            <div className="field-control">
              <label className="input-name">First name</label>
              <input
                className="input-control"
                type="first-name"
                onChange={(e) => {
                setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="field-control">
              <label className="input-name">Last name</label>
              <input
                className="input-control"
                type="last-name"             
                onChange={(e) => {
                setLastName(e.target.value);
                }}
              />
            </div>
            <div className="field-control">
              <label className="input-name">Email</label>
              <input
                className="input-control"
                type="email"             
                onChange={(e) => {
                setEmail(e.target.value);
                }}
              />
            </div>
            <div className="field-control">
              <label className="input-name">Birthday</label>
              <input
                className="input-control"
                type="date"             
                onChange={(e) => {
                setDate(e.target.value);
                }}
              />
            </div>
            <div className="field-control">
              <label className="input-name">Password</label>
              <input
                className="input-control"
                type="password"             
                onChange={(e) => {
                setPassword(e.target.value);
                }}
                
              />
            </div>
            <div className="field-control">
              <label className="input-name">Repeat Password</label>
              <input
                className="input-control"
                type="password"             
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            
                <button className="login-button2" onClick={register}> CREATE ACCOUNT </button>
          </div>

        </div>
        
      </div>
    )
}
 
export default Register;