import React from 'react'
import { Link } from 'react-router-dom'

class Header_2 extends React.Component {
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }
    render() {
        return (
            <div className="header-content">
            <Link className="custom">Ghost Writer</Link>
                <div className="topnav" id="myTopnav">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/signout">Sign Out</Link>
                    <Link className="icon" onClick={this.myFunction}>
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header_2;