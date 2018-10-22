import React from 'react';


export default class ContactInfo extends React.Component {
        render = () => {
                return <div> 
                    <h2> GET IN TOUCH </h2>

                    <div className="contact-pics"> 
                        <img className="_icon"src="https://cdn4.iconfinder.com/data/icons/proglyphs-mailing-and-messaging/512/Mail_-_Reply_to_all-512.png" alt="email"/>
                        <img className="_icon"src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin.png" alt="linked-in"/>
                        <img className="_icon"src="https://www.shareicon.net/data/512x512/2017/03/07/880593_media_512x512.png" alt="github"/>
                    </div>
                </div>
        }
}

//https://www.shareicon.net/download/2015/09/25/106850_connection_512x512.png