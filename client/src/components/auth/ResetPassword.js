import React from 'react';

class ResetPassword extends React.Component {
    render() {
        return (
            <div className="body_content">
                <div className="sign_form_area">
                    <div className="big_font b padding-top-bottom-1rem center">Ghost Writer</div>
                    <div className="middle_font b padding-top-bottom-1rem center">Reset Your Password</div>
                    <div className="center">Choose a new password</div>
                    <div className="center">
                        <input type="password" className="long" placeholder="Enter New Password" />
                        <input type="password" className="long" placeholder="Confirm New Password" />
                    </div>
                    <div className="center">
                        <button type="button" className="btn long">Submit</button>  
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default ResetPassword;