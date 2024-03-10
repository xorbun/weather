import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Home2 = () => {
  const meteoFromRedux = useSelector((state) => {
    return state.content[0];
  });
  const city = useSelector((state1) => {
    return state1.cityname[0];
  });
  if (meteoFromRedux) {
    const urlIcon = `http://openweathermap.org/img/w/${meteoFromRedux[0].weather[0].icon}.png`;
    const urlIcon2 = `http://openweathermap.org/img/w/${meteoFromRedux[1].weather[0].icon}.png`;
    const urlIcon3 = `http://openweathermap.org/img/w/${meteoFromRedux[2].weather[0].icon}.png`;
    const urlIcon4 = `http://openweathermap.org/img/w/${meteoFromRedux[3].weather[0].icon}.png`;
    const urlIcon5 = `http://openweathermap.org/img/w/${meteoFromRedux[4].weather[0].icon}.png`;
    const urlIcon6 = `http://openweathermap.org/img/w/${meteoFromRedux[5].weather[0].icon}.png`;
    let meteoWallpaper = "";
    if (meteoFromRedux[0].weather[0].description === "clear sky") {
      meteoWallpaper = `assets/pexels-photomix-company-96622.jpg`;
    } else if (meteoFromRedux[0].weather[0].description === "overcast clouds") {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
    } else if (meteoFromRedux[0].weather[0].description === "light rain") {
      meteoWallpaper = `assets/18166-3840x2160-desktop-4k-rain-background-photo.jpg`;
    } else if (meteoFromRedux[0].weather[0].description === "few clouds") {
      meteoWallpaper = `assets/scattered-white-clouds-b19839264934a8d79dd4417668d701ff.jpg`;
    } else if (meteoFromRedux[0].weather[0].description === "light snow") {
      meteoWallpaper = `assets/peakpx.jpg`;
    } else if (meteoFromRedux[0].weather[0].description === "moderate rain") {
      meteoWallpaper = `assets/18166-3840x2160-desktop-4k-rain-background-photo.jpg`;
    }else if (meteoFromRedux[0].weather[0].description === "scattered clouds") {
      meteoWallpaper = `assets/scattered-white-clouds-b19839264934a8d79dd4417668d701ff.jpg`;
    }else if (meteoFromRedux[0].weather[0].description === "broken clouds") {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
    }
    return (
      <Container
        fluid
        className="colorsite "
        style={{
          backgroundImage: `url(${meteoWallpaper})`,
          width: "100%", height: "auto" 
        }}
      >
        <Row className="mt-5 " style={{ height: "50rem" }}>
          <Col>
            <div className="d-flex justify-content-center ">
              <h2>Condizioni meteo attuali</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Card
                style={{ width: "18rem", height: "15rem" }}
                className="rounded-5 d-flex cardbackground"
              >
                <div className="d-flex justify-content-center ">
                  <span className="fs-3"> presso: </span>
                  <span className="fs-3"> {city}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column align-items-center">
                    <Card.Img
                      variant="top"
                      style={{ width: "82px" }}
                      src={urlIcon}
                    />
                    <span>{meteoFromRedux[0].weather[0].description}</span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-end">
                    <span>temp: {meteoFromRedux[0].main.temp}</span>
                    <span>um: {meteoFromRedux[0].main.humidity}</span>
                  </div>
                </div>
              </Card>
              <Card
                style={{ width: "18rem" }}
                className="rounded-5 mx-2 cardbackground"
              >
                <div className="d-flex justify-content-start">
                  <span className="fs-3">nelle prossime ore:</span>
                </div>
                <div className="d-flex justify-content-between">
                  <img src={urlIcon2} alt="meteo" />
                  <span className="my-2">
                    {meteoFromRedux[1].weather[0].main}
                  </span>
                  <span className="my-2">{meteoFromRedux[1].main.temp}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <img src={urlIcon3} alt="meteo" />
                  <span className="my-2">
                    {meteoFromRedux[2].weather[0].main}
                  </span>
                  <span className="my-2">{meteoFromRedux[2].main.temp}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <img src={urlIcon4} alt="meteo" />
                  <span className="my-2">
                    {meteoFromRedux[3].weather[0].main}
                  </span>
                  <span className="my-2">{meteoFromRedux[3].main.temp}</span>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default Home2;
