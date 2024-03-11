


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbarhome from './components/Navbar';
import Welcome from "./components/Welcome";
import Footer from "./components/Myfooter";

import Home2 from "./components/Home2";
import WindCharts from "./components/WindChart";
import Backofficefetch from "./components/Backoffice";





function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarhome />
      <Backofficefetch/>

      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/cerca" element={<Home2/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App;
