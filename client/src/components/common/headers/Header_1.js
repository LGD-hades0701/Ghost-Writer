import React from 'react'
import { Link } from 'react-router-dom'

class Header_1 extends React.Component {
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
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link className="icon" onClick={this.myFunction}>
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header_1;