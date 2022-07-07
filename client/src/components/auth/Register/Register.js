import "./Register.css"
import React, { useState } from 'react'

const Register = (props) => {
  


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState(new Date())
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const [loginStatus, setLoginStatus] = useState(false);


      const login = (e) => {
        e.preventDefault();

        const data = { email, password };

        fetch('http://localhost:3000/accounts/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => res.json())
          .then ((data) => {
            console.log(data)
          })
      };
      
      //treba da go stavam tokenot vo  useContext ili redux 
   
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
            
                <button className="login-button2" onClick={login}> CREATE ACCOUNT </button>
          </div>

        </div>
        
      </div>
    )
}
 
export default Register;