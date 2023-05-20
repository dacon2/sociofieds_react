//use yarn instead of npm
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Index from "../src/Pages/Home/Index";//Home
import './App.css'
import TermsCondition from "../src/Components/Footer/T&C";
import PrivacyPolicy from "../src/Components/Footer/Privacy";
import '../src/Animation/animation.css'
import AboutIndex from "../src/Pages/AboutUs/AboutIndex";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/FooterIndex";

function App() {
  return (
   <>
   

   {/* Main Home Page */}
   <Router>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/terms" element={<TermsCondition/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/aboutus" element={<AboutIndex/>}/>
      
    </Routes>
    <Footer/>
  
   </Router>
   
   </>
  );
}

export default App;
