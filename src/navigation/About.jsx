import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="about-description">
                    <h1 className='about-title'>
                        About News<span>Forge</span>
                    </h1>
                    <p>
                        NewsForge is a modern news aggregation platform that delivers the latest headlines from trusted sources around the world. Our goal is to make staying informed simple, fast, and accessible.
                    </p>
                    <p>
                        Built using React and news APIs, NewsForge fetches real-time news across categories such as Technology, Business, Sports, Science, Health, and Entertainment.
                    </p>
                    <p>
                        We believe information should be easy to access without unnecessary clutter. NewsForge focuses on providing a clean reading experience, helping users discover important stories quickly.
                    </p>
                </div>
                <div className="features-and-tech">
                    <div className="side features">
                        <h2>
                            Features :
                        </h2>
                        <ul>
                            <li>Real-time news updates</li>
                            <li>Category-based browsing</li>
                            <li>Responsive design for desktop and mobile</li>
                            <li>Fast and intuitive user interface</li>
                        </ul>
                    </div>
                    <div className="side tech-used">
                        <h2>
                            Technology Stack :
                        </h2>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>News API</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mission">
                <h2>
                    Our Mission :
                </h2>
                <p>
                    To create a reliable and user-friendly platform that helps people stay informed about the events shaping the world.
                </p>
                <p>
                    NewsForge is an ongoing project and will continue to evolve with new features and improvements.
                </p>
            </div>
        </div >
    )
}