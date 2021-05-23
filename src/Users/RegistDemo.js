import { useState } from "react";
import Axios from 'axios';

const RegistDemo = () => {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
      Axios.post('http://localhost3001/register', {
          username: usernameReg,
          password: passwordReg,
        }).then((response)=> {
            console.log(response);
        });
  }

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input 
          type="text"
          onChange={(e)=>{
            setUsernameReg(e.target.value)}}  
        />
        <br/>
        <label>Password</label>
        <input 
          type="text" 
          onChange={(e)=>{
            setPasswordReg(e.target.value)}}  
        />
        <br/>
        <button onClick={register}> Register </button>
      </div>
      <br/>
      <div className="login">
          <h1>Login</h1>
          <input type="text" placeholder="Username..." />
          <br/>
          <input type="passwprd" placeholder="Password..." />
          <br/>
          <button> Register </button>
      </div>
    </div>
  );
};

export default RegistDemo;
