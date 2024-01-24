import { CardBody, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




const  Home=(props)=>
 {
  
   const urlIcon =`http://openweathermap.org/img/w/${props.icon}.png`;
   const urlIcon2=`http://openweathermap.org/img/w/${props.icon1}.png`;
   const urlIcon3=`http://openweathermap.org/img/w/${props.icon2}.png`;
   const urlIcon4=`http://openweathermap.org/img/w/${props.icon3}.png`;
   const urlIcon5=`http://openweathermap.org/img/w/${props.icon4}.png`;
   const urlIcon6=`http://openweathermap.org/img/w/${props.icon5}.png`;
   return (
   
    <Container fluid >
      <Row className='vh-100 mt-5'>
        <Col>
          <Row className='d-flex flex-column align-items-center'>
          <Col className='mb-2 col-md-6 '>
            <Card className='bg-info bg-gradient shadowwww'>
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
          <Col className='col-md-6'>
            <Card className='shadowwww' >
              <h3 className='text-center'>condizioni vento</h3>
              <Card.Body className='d-flex flex-column align-items-center'>
                  <div>
                    {props.windinfo}
                  </div>
                  <div>
                    {props.windinfo2}
                  </div>
                  <div>
                    {props.windinfo3}
                  </div>
              </Card.Body >
            </Card>
          </Col>
          </Row>
        </Col>
        <Col >
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className='bg-info bg-gradient shadowwww'>
                <Card.Body className='d-flex justify-content-center'>
                  <img src={urlIcon} width="50%"/> 
                </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                            {props.name}
              </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                        {props.desc}
              </Card.Body>
              <Card.Body className='d-flex justify-content-center'>
                        {props.temp}
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Col>
     </Row>
    </Container>
 
  );
}
export default Home;