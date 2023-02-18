import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_1">
                    <div>
                        <div className="small_font b">
                            Contact Details
                        </div>
                        <br />
                        929-242-6868
                        <br />
                        <br />
                        <Link className="custom">contact@info.com</Link>
                        <Link className="custom">123 Fifth Avenue, New York, NY 10160</Link>
                    </div>
                    <div>
                        <img src="assets/img/white-logo.png" />
                    </div>
                    <div>
                        <span className="small_font b">Quick Links</span><br /><br />
                        Shipping & Returns<br />
                        Contact<br />
                        Customer Service<br />
                    </div>
                </div>
                <div className="footer_2">
                    <div>
                        Copyright © 2023 gator3006.temp.domains/~aighostw | Powered by gator3006.temp.domains/~aighostw
                    </div>
                    <div>
                        <i className="fa fa-caret-square-o-right"></i>
                        <i className="fa fa-camera"></i>
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Footer;