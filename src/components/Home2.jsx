import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import WindCharts from "./WindChart";

const Home2 = () => {
  const meteoFromRedux = useSelector((state) => {
    return state.content[0];
  });
  const city = useSelector((state1) => {
    return state1.cityname[0];
  });
  if (meteoFromRedux) {
    let meteoWallpaper = "";
    let meteoIcon = "";
    let meteoIconArray = [];
    if (meteoFromRedux[0].weather[0].main === "Clear") {
      meteoWallpaper = `assets/pexels-photomix-company-96622.jpg`;
      meteoIcon = `assets/SVG/sun.svg`;
    } else if (meteoFromRedux[0].weather[0].description === "overcast clouds") {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    } else if (meteoFromRedux[0].weather[0].main === "Rain") {
      meteoWallpaper = `assets/18166-3840x2160-desktop-4k-rain-background-photo.jpg`;
      meteoIcon = `assets/SVG/rain.svg`;
    } else if (meteoFromRedux[0].weather[0].description === "few clouds") {
      meteoWallpaper = `assets/scattered-white-clouds-b19839264934a8d79dd4417668d701ff.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    } else if (meteoFromRedux[0].weather[0].main === "Snow") {
      meteoWallpaper = `assets/peakpx.jpg`;
      meteoIcon = `assets/SVG/snow.svg`;
    } else if (meteoFromRedux[0].weather[0].main === "Clouds") {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    }
    let j = 0;
    for (let i = 1; i < 4; i++) {
      if (meteoFromRedux[i].weather[0].main === "Clear") {
        meteoIconArray[j] = `assets/SVG/sun.svg`;
        j++;
      } else if (meteoFromRedux[i].weather[0].main === "Rain") {
        meteoIconArray[j] = `assets/SVG/rain.svg`;
        j++;
      } else if (meteoFromRedux[i].weather[0].main === "Snow") {
        meteoIconArray[j] = `assets/SVG/snow.svg`;
        j++;
      } else if (meteoFromRedux[i].weather[0].main === "Clouds") {
        meteoIconArray[j] = `assets/SVG/cloud.svg`;
        j++;
      }
    }
    return (
      <div
        className="vh-200"
        style={{
          backgroundImage: `url(${meteoWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "200%",
        }}
      >
        <Container fluid>
          <Row className="mt-2 ">
            <div className="d-flex justify-content-center ">
              <h2>Condizioni meteo attuali</h2>
            </div>
            <Col>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <Row>
                  <Col className="d-flex justify-content-center mb-2">
                    <Card className="rounded-5 d-flex cardbackground cardsize">
                      <div className="d-flex justify-content-center ">
                        <span className="fs-3"> presso: </span>
                        <span className="fs-3"> {city}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div className="d-flex flex-column align-items-center">
                          <Card.Img
                            variant="top"
                            style={{ width: "102px" }}
                            src={meteoIcon}
                          />
                          <span>
                            {meteoFromRedux[0].weather[0].description}
                          </span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-end">
                          <span>temp: {meteoFromRedux[0].main.temp}</span>
                          <span>um: {meteoFromRedux[0].main.humidity}</span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card className="rounded-5 cardbackground cardsize">
                      <div className="d-flex justify-content-start mb-2">
                        <span className="fs-3">nelle prossime ore:</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[0]}
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux[1].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux[1].main.temp}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[1]}
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux[2].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux[2].main.temp}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[2]}
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux[3].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux[3].main.temp}
                        </span>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-center">
                <Card className="mb-5 mt-3 rounded-5 cardbackground graphicsize">
                  <h1 className="d-flex justify-content-center">Andamento del vento</h1>
                  <WindCharts />
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Home2;
