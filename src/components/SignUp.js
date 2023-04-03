import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

import { backendUrl } from '../env';


const SignUp = () => {
  const history=useHistory();
    /*
    const [username,setUserName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');

    const handleUserNameChange=(event)=>{
     setUserName(event.target.value);  
    }

    const handlePhoneNumberChange=(event)=>{
        setPhone(event.target.value);
    }

    const handleEmailIdChange=(event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        setpassword(event.target.value);
    }
  
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(username);
        console.log(phone);
        console.log(email);
        console.log(password);
    }
    */
    const[logInDetails,setOriginalDetails]=useState({

        userName:'',
        phonenumber:'',
        emailid:'',
        password:'',
       });

       const handleChange=(event)=>{
        const{name,value}=event.target;
        setOriginalDetails({...logInDetails,[name]:value});
       }

      const handleSubmit=async (event)=>{
        event.preventDefault();
        if(logInDetails.name  && logInDetails.emailid && logInDetails.password && logInDetails.phonenumber){
          await axios.post(`${backendUrl}/SignUp`,logInDetails)
          .then((res) =>{
               if(res.status===200){
                history.pushState('./Login.js');
               }else{
                console.log("Something went wrong");
               }
          }).catch((err) =>{
            console.log(err);
          })
        }else{
          alert("please fill all details")
        }
    }

        
        

      

  return (
    <div className='home'>
   <form className='myform'>
  <div className="mb-3">
    <label  className="form-label">UserName</label>
    <input type="text" name="username"className="form-control"  onChange={(event => handleChange(event))}placeholder='username'/>
  </div>

  <div className="mb-3">
    <label  className="form-label">PhoneNumber</label>
    <input type="text"  name="phonenumber"className="form-control"  onChange={(event => handleChange(event))} placeholder='phonenumber'/>
  </div>


  <div className="mb-3">
    <label  className="form-label">EmailId</label>
    <input type="text"  name="emailid"className="form-control" onChange={(event => handleChange(event))} placeholder='email'/>
  </div>


  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name="password" className="form-control" onChange={(event => handleChange(event))} placeholder='password' />
  </div>


  
  
  <button className="btn btn-primary" onClick={(event=>handleSubmit(event))}>SignUp</button>
  <p><Link to={'/login'}>already have an account ?</Link> </p>
</form>
      
    </div>
  )
}

export default SignUp
