import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    /*
    first way
    const [username, setUserName] = useState('');
    const [password, setpassword] = useState('');

    const handleUserName=(event)=>{
        setUserName(event.target.value);
    }
    const handlePassword=(event)=>{
        setpassword(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(username);
        console.log(password);
    }
    */

   const[logInDetails,setOriginalDetails]=useState({
    userName:'',
    password:'',
   });
   const handleChange = (event)=>{
    const{name,value}=event.target;
    setOriginalDetails({...setOriginalDetails,[name]:value});
   }
   const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(setOriginalDetails);
   }

    return (
        <div className='home'>
            <form className='myform'>
                <div className="mb-3">
                    <label className="form-label" >UserName</label>
                    <input type="text" name="username"  onChange={(event=>handleChange(event))} className="form-control" placeholder='username' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="phone" onChange={(event=>handleChange(event))}className="form-control" placeholder='password' />
                </div>




                <button  onClick={(e)=> handleSubmit(e)} className="btn btn-dark">Login</button>
                <p><Link to={'/signup'}>New User Registration</Link></p>
            </form>
            
        </div>
    )
}

export default Login
