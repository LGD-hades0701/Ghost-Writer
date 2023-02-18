import React from 'react'
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    render() {
        return (
            <div className="body_content">
                <div className="sign_form_area">
                    <div className="big_font b center padding-top-bottom-1rem">Ghost Writer</div>
                    <div className="middle font b center padding-top-bottom-1rem">Sign Up</div>
                    <div className="center">
                        <input type="text" className="long" placeholder="Email"/>
                        <input type="password" className="long" placeholder="Password" />
                    </div>
                    <div className="center">
                        <button type="button" className="btn long">Sign Up</button>  
                    </div>
                </div>
            </div>
        )   
    }
}

export default SignUp;