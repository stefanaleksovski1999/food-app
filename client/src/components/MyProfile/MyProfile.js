import './MyProfile.css';
import React, {useState } from "react";

const MyProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState(new Date())
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const [loginStatus, setLoginStatus] = useState(false);


      const login = (e) => {
        e.preventDefault();

        const data = { email, password, date, lastName, firstName };

        console.log(data)

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
          <h1 className="title"> <span className="adding-line">My Profile</span> </h1>
          
        </div>
        
        <div className="content">
          <div className="avatar-container">
            <img className="avatar"  src={require('./avatar2.jpg')}></img>

            <button className="change-avatar">CHANGE AVATAR</button>

          </div>
          <div className="form-control3"> 
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
              <button className="login-button2" onClick={login}> SAVE </button>
            </div>
            
          </div>

        </div>
        
      </div>
    )
}
 
export default MyProfile;