import { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { obtainmeteo } from "./redux/actions";
const Navbarhome = () => {
  const [cityName, setcityName] = useState("");
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="navcolor">
      <Container fluid>
        <Navbar.Brand onClick={() => window.location.reload()}>
          My weather Channel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home2">Home</Nav.Link>
            <Nav.Link href="/cerca">cerca</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(obtainmeteo(cityName));
          }}
        >
          <Form.Control
            className="mb-2 mt-3 "
            required
            type="text"
            placeholder="cerca località"
            value={cityName}
            onChange={(e) => {
              e.preventDefault();
              setcityName(e.target.value);
            }}
          />
        </Form>
      </Container>
    </Navbar>
  );
};
export default Navbarhome;
