import React, {useState}  from 'react';
import "./Login.css";
import axios from "axios"

const Login = () => {

    const [user ,setUser] = useState({
        email: "",
        password:""
      

    })
    const handleChange = e => {
       
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value

        })
    }
    const login = () =>{
        axios.post("http://localhost:9002/Login",user)
        .then(res => alert(res.data.message))
    }

     return(
        <div className="login">
            {console.log("User",user)}
            <h1>Login</h1>
            <input type ="email" name='email' value={user.email}placeholder='Enter Your email address'onChange={handleChange} ></input>
            <input type ="password" name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
            <div className="Button" onClick={login}>Login</div>
            <div>or</div>
            <div className="Button">Register</div>
        </div>
     );
}


export default Login;

