import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {
    const history = useHistory();
    const [logInDetails, setOriginalDetails] = useState({
        userName: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOriginalDetails({ ...logInDetails, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(logInDetails);
        if (logInDetails.userName != '' && logInDetails.password != '') {
            localStorage.setItem("userName", logInDetails.userName);
            props.setUser(logInDetails.userName);
            history.push('/');
        }else{
            alert("please fill all details");
        }
    }

    return (
        <div className='home'>
            <div className='myform'>
                <div className="mb-3">
                    <label className="form-label" >UserName</label>
                    <input type="text" name="userName" onChange={(event => handleChange(event))} className="form-control" placeholder='username' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" onChange={(event => handleChange(event))} className="form-control" placeholder='password' />
                </div>




                <button onClick={(e) => handleSubmit(e)} className="btn btn-dark">Login</button>
                <p><Link to={'/signup'}>New User Registration</Link></p>
            </div>

        </div>
    )
}

export default Login
