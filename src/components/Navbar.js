import React from 'react'
import { Link, useHistory } from 'react-router-dom';


const Navbar = (props) => {
    const history = useHistory();

    const handlelogout = (event) => {
        event.preventDefault();
        props.setUser('');
        localStorage.clear();
        history.push('/login');
    }



    return (

        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between " style={{backgroundColor:"#7d848c"}}>
            <h1 className="navbar-brand" >E-cart</h1>

            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active"  aria-current="page" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"   to={'/about'}>AboutUs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>ContactUs</Link>
                    </li>

                    <li className="nav-item">
                        <p className="nav-link" > {props.name}</p>


                    </li>

                    <li className='nav-item' style={{margin:"8px"}}>
                    <p style={{ border: "none", background: "none", cursor: "pointer" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                    </p>
                    </li>
                   


                    <li className="nav-item">
                        <button type="button" onClick={(e) => handlelogout(e)} class="btn btn-danger">Logout</button>
                    </li>

                    
                    

                </ul>
            </div>
        </nav>

    )
}

export default Navbar