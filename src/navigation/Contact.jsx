import './contact.css';
import SignatureImage from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/1000119687.jpg';
import Email from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/envelope.svg';
import Location from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/map-pin.svg';
import ResponseTime from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/clock.svg';
import Github from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/github-logo-fill.svg';
import Linkedin from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/linkedin-logo-fill.svg';
import Xcom from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/x-logo-fill.svg';
import Facebook from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/facebook-logo-fill.svg';
import Instagram from '/home/rem/Desktop/learn/react/newsapp/newsForge/src/navigation/imgs/instagram-logo-fill.svg';

export default function Contact() {
    return (
        <>
            <div className="contact-page">
                <div className="upper-sec">
                    <div className="img-sec">
                        <div className="img-sec-content">
                            <h1>Contact News<span>Forge</span></h1>
                            <p>Have feedback, suggestions <br/> or inquires?</p>
                            <p>We'd love hear from you.</p>
                        </div>
                        <div className="img-sec-img">
                            <img src={SignatureImage} />
                        </div>
                    </div>
                    <div className="contact-from">
                        <form action="#" method="POST">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                    <div className="newsforge-contact-details-sec">
                        <div className="contact-details-div">
                            <div className="contact email-div">
                                <img src={Email} />
                                <p><span>Email:</span> <br />Conatact@NewsForge.com</p>
                            </div>
                            <div className="contact location-div">
                                <img src={Location} />
                                <p><span>Location:</span><br />Odisha,India</p>
                            </div>
                            <div className="contact Response-div">
                                <img src={ResponseTime} />
                                <p><span>Response Time:</span><br /> Usually within 24hours</p>
                            </div>
                        </div>
                        <div className="contact-medium-div">
                            <h3>Follow Us</h3>
                            <div className="app-div">
                                <img src={Github} alt="" />
                                <img src={Linkedin} alt="" />
                                <img src={Xcom} alt="" />
                                <img src={Facebook} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="lower-sec">
                    <h1>Frequently Asked Questions</h1>
                </div> */}
            </div>
        </>
    )
}