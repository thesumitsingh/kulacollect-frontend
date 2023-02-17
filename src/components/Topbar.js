import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.svg';
function Topbar() {
    return (
        //<!-- Image and text -->
        <nav className="navbar navbar-light " style={{ backgroundColor : "#633fab"}}>
            <a className="navbar-brand d-inline-block align-top m-1 mx-4 text-white" href="http://localhost:3000/?#">
                <img src={logo} height="50" alt=""/>
                <a className='text-white text-decoration-none mx-2'>   collector</a>
            </a>
        </nav>
    );
}

{/* <img src={logo} height="50" alt="" className="m-1 mx-4"/> collect
<div className="m-1 mx-4 text-white pull-right">
collector
</div> */}

export default Topbar;