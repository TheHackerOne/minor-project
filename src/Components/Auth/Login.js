import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import './Login.css'
import { AuthContext } from "./AuthContext";
import { database } from "../../firebase";


function Login() {
    let { login } = useContext(AuthContext);
    let history = useHistory()

    const [info, setInfo] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({ ...info, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('passing this info to the firebase server',info)
        try {
            let userObj = await login(info.email, info.password);
            let userId = userObj.user.uid;
            console.log('user in login.js ', userId)
            history.push("/profile");
        } catch (error) {
            console.log(error)
            console.log("Login failed")
        }
    }


  return (
    <>
      <div className='login-outer'>
        <div className='login-inner'>
            <h1>Login Up Form</h1>
            <form className='form-container' onSubmit={onSubmit}>
                <label className='label' htmlFor="email">Email</label>
                <TextField id="standard-basic" name='email' label="Standard" variant="standard" onChange={(e) =>handleChange(e)}/>
                <label className='label' htmlFor="password">Password</label>
                <TextField id="standard-basic" name='password' label="Standard" variant="standard" onChange={(e) =>handleChange(e)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Login;
