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
import "./App.css"

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
          <Routes>
            <Route exact path='/Home' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/News' element={<News/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/LoginForm' element={<LoginForm/>} />
            {/* <Route path='/Inventory' element={<Inventory cars = {cars}/>} /> */}
            <Route path='/Inventory' element={<Inventory/>} />
            <Route path='/SearchResults' element={<SearchResults/>} />
          </Routes>
        </Router> 
        <div className="App">
        <Footer/>
        </div>
    
    {/* </body>
    </html> */}
    </>
  );
}

export default App;