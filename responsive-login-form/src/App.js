import NavBar from "./components/NavBar";
import LoginForm from "./components/Loginform";
import Home from "./components/Home"; 
// import About component 
import About from "./components/About"; 
import News from "./components/News" 
import Contact from "./components/Contact"; 
import Inventory from "./components/Inventory"; 
import Footer from "./components/Footer"; 
import SearchResults from "./components/SearchResults"; 
import DetailsPage from "./components/DetailsPage"; 
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  Link 
} from "react-router-dom";

function App() {
  return (
    <>
      <Router> 
      <NavBar />
        {/*We can add a div here later for more content -TJ Kellyl Oct 27, 2023*/}
        <div className="merch-body">
          <Routes>
              <Route exact path='/Home' element={<Home/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/News' element={<News/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/LoginForm' element={<LoginForm/>} />
              {/* <Route path='/Inventory' element={<Inventory cars = {cars}/>} /> */}
              <Route path='/Inventory' element={<Inventory/>} />
              <Route path='/SearchResults' element={<SearchResults/>} />
              <Route path="/DetailsPage/:id" element={<DetailsPage />} />
          </Routes>
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
        </div>
          
        </Router> 
        {/* <div className="App"> */}
        {/* <Footer/> */}
        {/* </div> */}
       
        
    
    {/* </body>
    </html> */}
    </>
  );
}

export default App;