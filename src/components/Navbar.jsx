import { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { obtainews, obtainmeteo } from "./redux/actions";
import { useNavigate } from "react-router-dom";

const Navbarhome = () => {
  const [cityName, setcityName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actualmeteo = useSelector((state) => {
    return state.meteo.content[0];
  });

  let weathericon = "";
  if (actualmeteo) {
    if (actualmeteo.list[0].weather[0].main === "Clear") {
      weathericon = `assets/SVG/sun.svg`;
    } else if (actualmeteo.list[0].weather[0].main === "Rain") {
      weathericon = `assets/SVG/rain.svg`;
    } else if (actualmeteo.list[0].weather[0].main === "Snow") {
      weathericon = `assets/SVG/snow.svg`;
    } else if (actualmeteo.list[0].weather[0].main === "Clouds") {
      weathericon = `assets/SVG/cloud.svg`;
    }
  }
  return (
    <Navbar expand="lg" className="navcolor">
      <Container fluid>
        <Navbar.Brand>My weather Channel</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <span>home</span>
            </Nav.Link>
          </Nav>
          {actualmeteo ? (
            <div className="d-flex flex-column align-items-center">
              <Nav.Link className="mx-3 ">
                <img
                  src={weathericon}
                  
                  onClick={() => navigate("/cerca")}
                  alt="weathericon"
                />
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/cerca")} className="mx-2">
                {actualmeteo.list[0].main.temp}°
              </Nav.Link>
            </div>
          ) : (
            ""
          )}
        </Navbar.Collapse>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(obtainmeteo(cityName));
            setcityName("");
            navigate("/cerca");
          }}
        >
          <Form.Control
            className="mb-2 mt-3 "
            required
            type="text"
            placeholder="what's the weather in.."
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
