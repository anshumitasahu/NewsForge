import './contact.css';

export default function Contact() {
    return (
        <>
            <div className="upper-sec">
                <div className="herosection">
                    <div className="img-sec">
                        <h1>Contact News<span>Forge</span></h1>
                        <p>Have feedback, suggestions or inquires?</p>
                        <p>We'd love hear from you.</p>
                    </div>
                    <div className="contact-from">
                        <form action="#" method="POST">
                            <div className="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" required/>
                            </div>

                            <div className="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="you@example.com" required/>
                            </div>

                            <div className="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="How can we help?" required/>
                            </div>

                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}