import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import './Signup.css'
import { AuthContext } from "./AuthContext";
import { database } from "../../firebase";
import {Link} from 'react-router-dom'


function Signup() {
    let { signup } = useContext(AuthContext);
    let history = useHistory()

    const [info, setInfo] = useState({
        fullname: '',
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
        let userObj = await signup(info.email, info.password);
        let userId = userObj.user.uid;
        console.log('user in signup.js ', userId)
        let user = {
            name: info.fullname,
            email: info.email,
            uid: userId
        }
        database.users.doc(userId).set({
            ...user
        })
        history("/profile");
    }


  return (
    <>
      <div className='signup-outer'>
        <div className='signup-inner'>
            <h1>Sign Up Form</h1>
            <form className='form-container' onSubmit={onSubmit}>
                <label className='label' htmlFor="text">Full Name</label>
                <TextField id="standard-basic" name='fullname' label="Standard" variant="standard" onChange={(e) =>handleChange(e)}/>
                <label className='label' htmlFor="email">Email</label>
                <TextField id="standard-basic" name='email' label="Standard" variant="standard" onChange={(e) =>handleChange(e)}/>
                <label className='label' htmlFor="password">Password</label>
                <TextField id="standard-basic" name='password' label="Standard" variant="standard" onChange={(e) =>handleChange(e)}/>
                <button type='submit'>Submit</button>
                <p>Already Signed up? <Link to='/login'>Login</Link></p>
            </form>
           
        </div>
      </div>
      
    </>
  );
}

export default Signup;


