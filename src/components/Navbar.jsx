import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { obtainmeteo } from "./redux/actions";
const Navbarhome=()=>
{
 
    return(
        
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={()=>window.location.reload()}>My weather Channel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cerca">cerca</Nav.Link>
          
         
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    );
}
export default Navbarhome