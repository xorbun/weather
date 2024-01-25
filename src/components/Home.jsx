import { CardBody, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';



const  Home=()=>
 {
  const meteoFromRedux= useSelector((state)=>
 {
    return state.content[0]
 })
 const city=useSelector((state1)=>
 {
  return state1.cityname[0]
 })
 if(meteoFromRedux)
 {
   const urlIcon =`http://openweathermap.org/img/w/${meteoFromRedux[0].weather[0].icon}.png`;
   const urlIcon2=`http://openweathermap.org/img/w/${meteoFromRedux[1].weather[0].icon}.png`;
   const urlIcon3=`http://openweathermap.org/img/w/${meteoFromRedux[2].weather[0].icon}.png`;
   const urlIcon4=`http://openweathermap.org/img/w/${meteoFromRedux[3].weather[0].icon}.png`;
   const urlIcon5=`http://openweathermap.org/img/w/${meteoFromRedux[4].weather[0].icon}.png`;
   const urlIcon6=`http://openweathermap.org/img/w/${meteoFromRedux[5].weather[0].icon}.png`;
   return (
   
    <Container fluid style={{backgroundImage:"url('https://wallpaperaccess.com/full/4153450.jpg')",backgroundSize:"cover"}}>
      <Row className='vh-100 mt-5'>
        <Col>
          <Row className='d-flex flex-column align-items-center mt-5'>
          <Col className='mb-2 col-md-7 '>
            <Card style={{ width: '18rem' }} className='bg-info bg-gradient shadowwww '>
              <Card.Body className='d-flex'>
                <div>
                  <h4 className='text-center'>Previsioni delle prossime ore</h4>
                  <img src={urlIcon2}/>
                  <img src={urlIcon3}/>
                  <img src={urlIcon4}/>
                  <img src={urlIcon5}/>
                  <img src={urlIcon6}/>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-md-7'>
            <Card style={{ width: '18rem' }} className='shadowwww' >
              <h3 className='text-center'>condizioni vento</h3>
              <Card.Body className='d-flex flex-column align-items-center'>
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
        </Col>
        <Col >
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='bg-info bg-gradient shadowwww mt-5'>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={urlIcon} width="50%"/> 
                </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                    <h3>{city} </h3>      
              </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                        {meteoFromRedux[0].weather[0].description}
              </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                        {(meteoFromRedux[0].main.temp)+"°"}
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
        </Col>
     </Row>
     
    </Container>
 
  );
}
}
export default Home;