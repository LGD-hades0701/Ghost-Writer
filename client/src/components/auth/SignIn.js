import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <div className="body_content">
                <div className="sign_form_area">
                    <div className="big_font b padding-top-bottom-1rem center">Ghost Writer</div>
                    <div className="middle_font b padding-top-bottom-1rem center">Welcome Back</div>
                    <div className="center">
                        <input type="text" className="long" placeholder="Email or Username"/>
                        <input type="password" className="long" placeholder="Password" />
                    </div>
                    <div className="center">
                        <input type="checkbox" />Remember me &nbsp;<Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <div className="center">
                        <button type="button" className="btn long">Sign In</button>  
                    </div>
                    <div className="center">
                        Don't have an account? &nbsp;<Link to="/signup">Sign Up</Link>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
 }

 export default SignIn;