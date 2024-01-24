


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Meteo from './components/Meteo';
import Navbarhome from './components/Navbar';
import Welcome from "./components/Welcome";
import Footer from "./components/Myfooter";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarhome />

      <Routes>
        <Route path="/home" element={<Welcome/>}/>
        <Route path="/cerca" element={<Meteo/>}/>
      </Routes>
      <Footer/>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;
