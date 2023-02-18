import React from 'react'
import Header_1 from './common/headers/Header_1';
import Footer from './common/Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header_1 />

                {/* <!------------------ First Video used as a background in Paragraph 1 -------------> */}
                <video autoPlay muted loop id="video_1">
                <source src="/assets/videos/back.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>

                {/* <!----------------------------------- Body ---------------------------------------------- --> */}
                <div className="body-content"> 
                    {/* <!-------------------------- Paragraph 1 --------------------------- --> */}
                    <div className="content_1">
                        <p>Lyrics made the easy way!</p>
                        <div className="very_big_font b">Ghost Writer</div>
                        <p>Generate lyrics in seconds. Ghost writer uses AI technology to pull lyrics from thousands of songs to create the perfect verse.</p>
                        <button className="btn">Get Started</button>
                    </div>

                    <hr className="solid" />

                    {/* <!-------------------------- Paragraph 2 --------------------------- --> */}
                    <div>
                        <div className="center big_font b">Song writing has never been so easy!</div>
                        <div className="section_2_container">
                        <div>
                            {/* <pre id="demo" className="center">
                            Typing test is successful!
                            We are the champions, We are the best
                            We are the ones
                            End
                            </pre> */}
                        </div>
                        <div>
                            {/* <pre className="small_font center">
                                "Write a song like
                                Thriller by Michael 
                                Jackson"

                                "Write a rap verse 
                                about NYC"

                                "Write a love song by 
                                Taylor swift"

                                "Write a country song 
                                about beer"

                                "Write a chorus like 
                                the Chainsmokers"
                            </pre> */}
                        </div>
                    </div>
                </div>

                <hr className="solid" />

                {/* <!-------------------------- Paragraph 3 --------------------------- --> */}
                <div style={{position: "relative"}}>
                    {/* <!-- Second Video used as a background --> */}
                    <video autoPlay muted loop id="video_2">
                        <source src="/assets/videos/back.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="content_2">
                        <div className="center big_font b">
                            Get Started Ghostwriting
                        </div>
                        <div className="center">
                            <button className="btn">START</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        )
    }
}

export default Home;