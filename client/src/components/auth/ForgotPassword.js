import React from 'react';

class ForgotPassword extends React.Component {
    render() {
        return (
            <div className="body_content">
                <div className="sign_form_area">
                    <div className="big_font center b padding-top-bottom-1rem">Ghost Writer</div>
                    <div className="middle_font center padding-top-bottom-1rem">Reset Your Password</div>
                    <div className="center padding-top-bottom-1rem">Enter your GhostWriter.com email address so we can reset your password</div>
                    <div className="center">
                        <input type="email" className="long" placeholder="Enter Email" />
                    </div>
                    <div className="center">
                        <button type="button" className="btn long">Next</button>  
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default ForgotPassword;