import React from 'react'
import { Link,useHistory } from 'react-router-dom';


const Navbar = (props) => {
    const history=useHistory();

    const handlelogout=(event)=>{
        event.preventDefault();
        props.setUser('');
        localStorage.clear();
        history.push('/login');
    }



    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <h1 className="navbar-brand" >E-cart</h1>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>AboutUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>ContactUs</Link>
                        </li>

                        <li className="nav-item">
                        <p className="nav-link"> {props.name}</p>
                        </li>
                        
                        <li className="nav-item">
                        <button type="button" onClick={(e)=>handlelogout(e)} class="btn btn-danger">Logout</button>
                        </li>
                    </ul>
                </div>
        </nav>

    )
}

export default Navbar