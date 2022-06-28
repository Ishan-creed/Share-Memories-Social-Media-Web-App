import React, {useState}  from 'react';
import "./Register.css";
import axios from "axios"

const Register = () => {

    const [user ,setUser] = useState({
        name: "",
        email: "",
        password:"",
        reEnterPassword: ""

    })
    const handleChange = e => {
       
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value

        })
    }

   const register = () =>{
     const {name,email,password,reEnterPassword} = user
     if(name && email && password && (password == reEnterPassword)){
        
     axios.post("http://localhost:9002/Register", user)
     .then(res => console.log(res))
   }else{
    alert("Invalid input")
   }
}
     return(
        <div className="register">
         {console.log("User",user)}
            <h1>Register</h1>
            <input type ="text" name='name' value={user.name} placeholder='Enter Your Name' onChange={handleChange}></input>
            <input type ="email" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
            <input type ="password" name='password' value={user.password} placeholder='Enter your Password' onChange={handleChange}></input>
            <input type ="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Enter yourRe-enter your Password' onChange={handleChange}></input>
            <div className="Button" onClick={register}>Register</div>
            <div>or</div>
            <div className="Button">Login</div>
        </div>
     );
}


export default Register;

