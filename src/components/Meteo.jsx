import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


const Meteo = () => {
 const [weatherData, setWeatherData] = useState([]);
 const [cityName,setcityName]=useState("")


 const takeMeteo = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&units=metric&appid=c8c98b5ab556be664cdfdbe9eba56b1b'
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } 
        else 
        {
          throw new Error("errore");
        }
      })
      .then((data) => 
      {
        setWeatherData(data.list);
        console.log(data.list)
      })
      .catch((err) => 
      {
        console.log(err);
      });
  };

  useEffect(() => 
  {
    takeMeteo();
  }, []);

  return (
<div className='d-flex justify-content-center, mt-5'> 
  <Container  >
    <Row>
    {weatherData[0] ? <Home icon={weatherData[0].weather[0].icon} 
    desc={weatherData[0].weather[0].description} 
    name={cityName} 
    temp={(weatherData[0].main.temp)+"°"} 
    icon1={weatherData[1].weather[0].icon} 
    icon2={weatherData[2].weather[0].icon} 
    icon3={weatherData[3].weather[0].icon} 
    icon4={weatherData[4].weather[0].icon} 
    icon5={weatherData[5].weather[0].icon} />: 
    ""}
    
    </Row>
    
    <Row className="d-flex justify-content-center mt-3">
      <Col xs={2} >
        <Form>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={cityName}
            onChange={(e) =>
            {
              e.preventDefault()
              setcityName(e.target.value)
            }
            }
          />
          <Button className="mt-3" onClick={()=>
              {takeMeteo(cityName)}}>Cerca</Button>
         </Form>
      </Col>
    </Row>
  </Container>
</div>
  );
};

export default Meteo