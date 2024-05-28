
import { useState } from 'react';
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <>
            <link rel="stylesheet" href="footer.css" />
            <div className="container" />
            <footer>
                {/* Footer main */}
                <section className="ft-main">
                <div className="ft-main-item">
                    <h2 className="ft-title">About</h2>
                    <ul>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Customers</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Resources</h2>
                    <ul>
                    <li>
                        <a href="#">Docs</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">eBooks</a>
                    </li>
                    <li>
                        <a href="#">Webinars</a>
                    </li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Contact</h2>
                    <ul>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">Sales</a>
                    </li>
                    <li>
                        <a href="#">Advertise</a>
                    </li>
                    </ul>
                </div>
                <div className="ft-main-item">
                    <h2 className="ft-title">Stay Updated</h2>
                    <p>Subscribe to our newsletter to get our latest news.</p>
                    <form>
                    <input type="email" name="email" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" />
                    </form>
                </div>
                </section>
                {/* Footer social */}
                <section className="ft-social">
                <ul className="ft-social-list">
                    <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    </li>
                </ul>
                </section>
                {/* Footer legal */}
                <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li>
                    <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    <li>© 2024 Copyright TimothyKellyDev Inc.</li>
                </ul>
                </section>
            </footer>
        </>
    );
}

