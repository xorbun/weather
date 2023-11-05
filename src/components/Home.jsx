import { Col, Container, Row } from 'react-bootstrap';
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
    <Container className='bg-light bg-gradient' >
        <Row >
          <h1 className='d-flex justify-content-center'>Condizioni meteo attuali</h1>
            <Col className='d-flex justify-content-center mb-3'>
                <Card style={{ width: '18rem' }} className='bg-info bg-gradient'>
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
        <Row>
          <Col className='d-flex justify-content-center'>
            <Card className='bg-info bg-gradient'>
              <Card.Body>
                <img src={urlIcon2}/>
                <img src={urlIcon3}/>
                <img src={urlIcon4}/>
                <img src={urlIcon5}/>
                <img src={urlIcon6}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
    </Container>
  );
}
export default Home;