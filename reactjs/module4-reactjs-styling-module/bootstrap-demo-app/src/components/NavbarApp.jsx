import React from "react";
import { Nav,Navbar } from "react-bootstrap";
function NavbarApp()
{
    return (
        <>
            <Nav className="navbar nav navbar-expand-md  p-2">
                <a href="" className="navbar-brand text-white fs-1 ms-5"><span className="text-danger">IP</span>L 2025</a>
                {/* toggler button */}
                <button type="button" className="btn btn-default shadow navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collApp">
                    <span className="bi bi-grid fs-2 p-2 text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="collApp">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About IPL</a></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">All Teams</a>
                    <ul className="dropdown-menu m-0 p-0">
                    <li><a href="">RCB Team</a></li>
                    <li><a href="">MI Team</a></li>
                    <li><a href="">LKO Team</a></li>
                    <li><a href="">GJ Team</a></li>
                    <li><a href="">RSH Team</a></li>
                    </ul>
                    </li>
                    <li><a href="">Account</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                </div>
            </Nav>
        </>
    )
}

export default NavbarApp