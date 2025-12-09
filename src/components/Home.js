// Home page

import { Link } from 'react-router-dom';
import '../css/Home.css';
import '../css/Layout.css';

export default function Home() {

    return (
        <>
            <div className="banner"
                style={{
                    backgroundImage: "url('/assets/honolulu.jpg')",
                    backgroundSize: "cover"
                }}>
                <h1 className="greeting">Hi, I'm Melanie</h1>
                <h2 className="subgreeting">Welcome to my world</h2>
            </div>

            <div className="about-banner">
                <div className="about-banner-text">
                    <h2>Get to Know Me</h2>
                    <p>Click to learn more about my life and interests!</p>
                </div>

                <div className="about-banner-link">
                    <Link to="/about" className="click-button">ENTER</Link>
                </div>
            </div>

            <div className="promo-section">
                <a href="/writing"><div className="writing-promo"
                style={{
                    backgroundImage: "url('/assets/book.jpg')",
                }}>
                    <header>writing</header>
                </div></a>
                <Link to="/photography"><div className="photo-promo"
                style={{
                    backgroundImage: "url('/assets/camera.jpg')",
                }}>
                    <header>photography</header>
                </div></Link>
            </div>

            <div className="contact-section">
                <Link to="/contact"><img src="/assets/message-icon.png" alt="Icon" className="icon"/>
                <h2>Send me a message</h2></Link>
            </div>
        </>
    );
}