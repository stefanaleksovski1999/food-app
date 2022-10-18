import './MyProfile.css';
import React, {useState, useEffect, useContext } from "react";
import { UserContext } from "../../services/UserContext";
import { withRouter } from 'react-router';
import axios from 'axios';
import avatar from '../MyProfile/avatar2.jpg'


const MyProfile = () => {
  const { loggedUser } = useContext(UserContext);

  
  const [firstName, setFirstName] = useState(loggedUser.account.first_name);
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [file, setFile] = useState();
  const [image, setImage] = useState(loggedUser.account.image);

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);


  // console.log(image);
  


    

    console.log(loggedUser);

    const handleImgChange = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    };

    // console.log(data)

    const onSubmit = e => {

      
      e.preventDefault();

      const formData = new FormData();
      formData.append('image', file, file.name);
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('password', password);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const url = `http://localhost:3000/accounts/${loggedUser.account._id}`;

      // const data = {firstName, lastName, date, email, password, formData };


      axios
        .post(url, formData, config)
        .then((res) => {
          alert('Image Uploaded Successfully!')
        })
        .catch((err) => {
          console.log('err', err)
        });

      // fetch(`http://localhost:3000/accounts/${loggedUser.account._id}`, {
      //   method: 'POST',
      //   headers: { 
      //     'Content-Type': 'multipart/form-data' },
      //   body: formData
      // }).then(res => res.json())
      //   .then ((data) => {
      //     console.log(data)
      // });
  
    }

    const handleCPassword = (e) => {
      setCPassword(e.target.value);
      setIsCPasswordDirty(true);
    };

    useEffect(() => {
      if (isCPasswordDirty) {
          if (password === cPassword) {
              setShowErrorMessage(false);
              setCPasswordClass('form-control is-valid')
          } else {
              setShowErrorMessage(true)
              setCPasswordClass('form-control is-invalid')
          }
      }
  }, [cPassword])
   
    return (
      <div className="container" >
        <div className="login-line">
          <h1 className="title"> <span className="adding-line">My Profile</span> </h1>
          
        </div>
        
        <div className="content">
          
        

          <div className="avatar-container">
            <img className="avatar"  src={ image ? image : avatar }></img>

            <label className='label-tag' for="inputTag">
               CHANGE AVATAR
              <input 
                id="inputTag" 
                className='input-hidden' 
                type="file"
                name='photo'
                onChange={handleImgChange}
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
                onChange={handleCPassword}
              />
            </div>
            

            <button className="login-button2" onClick={onSubmit}> SAVE </button>
            {showErrorMessage && isCPasswordDirty ? <div className="pass-not-match">Passwords did not match!</div> : ''}
            
          </div>

        </div>
        
      </div>
    )
}
 
export default withRouter(MyProfile);