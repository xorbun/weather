import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import WindCharts from "./WindChart";

const Home2 = () => {
  const meteoFromRedux = useSelector((state) => {
    return state.meteo.content[0];
  });
  const city = useSelector((state1) => {
    return state1.meteo.content[0];
  });
  if (meteoFromRedux) {
    let meteoWallpaper = "";
    let meteoIcon = "";
    let meteoIconArray = [];
    if (meteoFromRedux.list[0].weather[0].main === "Clear") {
      meteoWallpaper = `assets/pexels-photomix-company-96622.jpg`;
      meteoIcon = `assets/SVG/sun.svg`;
    } else if (
      meteoFromRedux.list[0].weather[0].description === "overcast clouds"
    ) {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    } else if (meteoFromRedux.list[0].weather[0].main === "Rain") {
      meteoWallpaper = `assets/18166-3840x2160-desktop-4k-rain-background-photo.jpg`;
      meteoIcon = `assets/SVG/rain.svg`;
    } else if (meteoFromRedux.list[0].weather[0].description === "few clouds") {
      meteoWallpaper = `assets/scattered-white-clouds-b19839264934a8d79dd4417668d701ff.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    } else if (meteoFromRedux.list[0].weather[0].main === "Snow") {
      meteoWallpaper = `assets/peakpx.jpg`;
      meteoIcon = `assets/SVG/snow.svg`;
    } else if (meteoFromRedux.list[0].weather[0].main === "Clouds") {
      meteoWallpaper = `assets/black-rain-abstract-dark-power.jpg`;
      meteoIcon = `assets/SVG/cloud.svg`;
    }
    let j = 0;
    for (let i = 1; i < 4; i++) {
      if (meteoFromRedux.list[i].weather[0].main === "Clear") {
        meteoIconArray[j] = `assets/SVG/sun.svg`;
        j++;
      } else if (meteoFromRedux.list[i].weather[0].main === "Rain") {
        meteoIconArray[j] = `assets/SVG/rain.svg`;
        j++;
      } else if (meteoFromRedux.list[i].weather[0].main === "Snow") {
        meteoIconArray[j] = `assets/SVG/snow.svg`;
        j++;
      } else if (meteoFromRedux.list[i].weather[0].main === "Clouds") {
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
        <Container fluid className="text-light">
          <Row className="mt-2 ">
            <div className="d-flex justify-content-center ">
              <h2>Actually the weather's like</h2>
            </div>
            <Col>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Card className="rounded-5 d-flex cardbackground cardsize text-light">
                      <div className="d-flex justify-content-center ">
                        <span className="fs-3 "> {city.city.name}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div className="d-flex flex-column align-items-center">
                          <Card.Img
                            variant="top"
                            className="cambia-colore"
                            style={{ width: "102px" }}
                            src={meteoIcon}
                          />
                          <span className="mt-2">
                            {meteoFromRedux.list[0].weather[0].description}
                          </span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-end">
                          <span>temp: {meteoFromRedux.list[0].main.temp}°</span>
                          <span>
                            um: {meteoFromRedux.list[0].main.humidity}%
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card className="rounded-5 cardbackground cardsize text-light">
                      <div className="d-flex justify-content-start mb-2">
                        <span className="fs-3">next 3 hours:</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[0]}
                          className="cambia-colore"
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux.list[1].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux.list[1].main.temp}°
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[1]}
                          className="cambia-colore"
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux.list[2].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux.list[2].main.temp}°
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <img
                          src={meteoIconArray[2]}
                          className="cambia-colore"
                          width={"45px"}
                          alt="meteo"
                        />
                        <span className="my-2">
                          {meteoFromRedux.list[3].weather[0].description}
                        </span>
                        <span className="my-2">
                          {meteoFromRedux.list[3].main.temp}°
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
                <Card className="mb-5 mt-3 rounded-5 cardbackground graphicsize text-light">
                  <span className="d-flex justify-content-center fs-3">
                    Andamento del vento
                  </span>
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
