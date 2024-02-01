


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbarhome from './components/Navbar';
import Welcome from "./components/Welcome";
import Footer from "./components/Myfooter";

import Home2 from "./components/Home2";





function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarhome />
      

      <Routes>
        <Route path="/home" element={<Welcome/>}/>
        <Route path="/cerca" element={<Home2/>}/>
      </Routes>
      <Footer/>
        
      </BrowserRouter>
      
    </>
  )
}

export default App;
