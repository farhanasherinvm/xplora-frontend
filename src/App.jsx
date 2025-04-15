import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/userSide/login/Login'
import Signup from './components/userSide/signup/Signup'
import Navbar from "./components/userSide/navbar/Navbar";
import Home from "./components/userSide/home/Home";
import Footer from "./components/userSide/footer/Footer";
import TourList from "./components/userSide/destinations/TourList";
import DestinationDetail from "./components/userSide/destinations/DestinationDetail";
import Booking from "./components/userSide/booking/Booking";
function App() {
  

  return (
    
       <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<Navbar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/tours" element={<TourList />} />
          <Route path="/detail" element={<DestinationDetail />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  
  )
}

export default App
