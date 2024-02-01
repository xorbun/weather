import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Container className="w-100 vh-100 d-flex justify-content-center align-items-center space mb-5 mt-5">
        <Row className="d-flex justify-content-center align-items-center h-100 box-sizing-border-box lg-6">
          <Col className="lg-12 h-100 box-sizing-border-box">
            <Card className="maincard h-100 box-sizing-border-box">
              <Card.Body className="card-body"> 
                <Card.Title>{city}</Card.Title>
                <img src={urlIcon} width="50%" alt='currentmeteo'/>
                {meteoFromRedux[0].weather[0].description}
                <h6>temperatura</h6>
                {meteoFromRedux[0].main.temp}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column lg-6 space">
            <Col className="lg-12">
            <Card  className='bg-info bg-gradient shadowwww card'>
              <Card.Body className='d-flex'>
                <div>
                  <h6 className='text-center'>Previsioni delle prossime ore</h6>
                  <img src={urlIcon2} alt='nexttime'/>
                  <img src={urlIcon3} alt='nexttime'/>
                  <img src={urlIcon4} alt='nexttime'/>
                  <img src={urlIcon5} alt='nexttime'/>
                  <img src={urlIcon6} alt='nexttime'/>
                </div>
              </Card.Body>
            </Card>
            </Col>
            <Col className="lg-12 ">
            <Card className='shadowwww card'>
              <h3 className='text-center'>condizioni vento</h3>
              <Card.Body className='d-flex justify-content-center space align-items-center'>
                  <div>
                    {meteoFromRedux[0].wind.speed}
                  </div>
                  <div>
                    {meteoFromRedux[0].wind.gust}
                  </div>
                  <div>
                    {meteoFromRedux[0].wind.deg}
                  </div>
              </Card.Body >
            </Card>
            </Col>
        </Row>
      </Container>
    );
  }
};
export default Home2;
