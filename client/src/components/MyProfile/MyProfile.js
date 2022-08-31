import './MyProfile.css';
import React, {useState, useContext } from "react";
import { UserContext } from "../../services/UserContext";
import { withRouter } from 'react-router';


const MyProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();
  
  const { loggedUser } = useContext(UserContext);

    // const imgName = file.name

    const data = {firstName, lastName, date, email, password, file };

    // console.log(data)

    const onSubmit = e => {

      Object.keys(data).forEach(key => {
        if (data[key] === '') {
          delete data[key];
        }
      })
      e.preventDefault();
      const formData = new FormData();
      formData.append('filename', file, file.name);

      console.log(data)


      fetch(`http://localhost:3000/accounts/${loggedUser.account._id}`, {
        method: 'POST',
        // headers: { 
        //   'Content-Type': 'multipart/form-data' },
        body: formData
      }).then(res => res.json())
        .then ((data) => {
          console.log(data)
      });
  
    }


    
      
   
    return (
      <div className="container" >
        <div className="login-line">
          <h1 className="title"> <span className="adding-line">My Profile</span> </h1>
          
        </div>
        
        <div className="content">
          
        

          <div className="avatar-container">
            <img className="avatar"  src={loggedUser.account.image}></img>

            <label className='label-tag' for="inputTag">
               CHANGE AVATAR
              <input 
                id="inputTag" 
                className='input-hidden' 
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            
          </div>

          <div className="form-control3"> 
            <div className="field-control">
              <label className="input-name">First name</label>
              <input
                placeholder={loggedUser.account.first_name}
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
                placeholder={loggedUser.account.last_name}
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
                placeholder={loggedUser.account.email}
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
                placeholder={loggedUser.account.dateOfBirth}
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
              <button className="login-button2" onClick={onSubmit}> SAVE </button>
            
          </div>

        </div>
        
      </div>
    )
}
 
export default withRouter(MyProfile);