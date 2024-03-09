import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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
    return (
      <Container fluid className="vh-100 colorsite">
        <Row className="mt-5 ">
          <Col className="">
            <div className="d-flex justify-content-center">
              <h1>attualmente</h1>
            </div>
            <div className="d-flex justify-content-center">
              <Card sx={{ maxWidth: 345 }} className="bubble cardbackground">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={urlIcon}
                    alt="meteoIcon"
                  />
                </CardActionArea>
              </Card>
              <Card
                sx={{ maxWidth: 345 }}
                className="bubble d-flex align-items-center mx-2 cardbackground"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="fontsize"
                    >
                      {meteoFromRedux[0].main.temp}°
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <Card
                style={{ width: "150px", height: "150px" }}
                className="bubble d-flex align-items-center cardbackground mx-2"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="fontsize mx-2"
                    >
                      <img src={urlIcon2} alt="nextmeteo" />
                      <img src={urlIcon3} alt="nextmeteo" />
                      <img src={urlIcon4} alt="nextmeteo" />
                      <img src={urlIcon5} alt="nextmeteo" />
                      <img src={urlIcon6} alt="nextmeteo" />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default Home2;
