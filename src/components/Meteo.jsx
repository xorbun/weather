import React, { useState } from "react";
import Home from "./Home";
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from "react-redux";
import { obtainmeteo } from "./redux/actions";


const Meteo = () => 
{
const [cityName,setcityName]=useState("")
const dispatch=useDispatch()
const meteoFromRedux= useSelector((state)=>
 {
    return state.content[0]
 })

 return (

<div className='d-flex justify-content-center, mt-5'>
  <Container  >
    {meteoFromRedux &&
    
    <Row>
    {meteoFromRedux[0] ? <Home icon={meteoFromRedux[0].weather[0].icon}
    desc={meteoFromRedux[0].weather[0].description}
    name={cityName}
    temp={(meteoFromRedux[0].main.temp)+"°"}
    icon1={meteoFromRedux[1].weather[0].icon}
    icon2={meteoFromRedux[2].weather[0].icon}
    icon3={meteoFromRedux[3].weather[0].icon}
    icon4={meteoFromRedux[4].weather[0].icon}
    icon5={meteoFromRedux[5].weather[0].icon} />:
    ""}
  
    </Row> 
    }


    <Row className="d-flex justify-content-center mt-3">
      <Col xs={2} >
        <Form onSubmit={(e)=>
        {
          e.preventDefault()
          dispatch(obtainmeteo(cityName))
        }}>
          <Form.Control
            required
            type="text"
            placeholder="cerca località"
            value={cityName}
            onChange={(e) =>
            {
              e.preventDefault()
              setcityName(e.target.value)
            }
            }
          />
          <Button type="submit" className="mt-3">Cerca</Button>
         </Form>
      </Col>
    </Row>
  </Container>
</div>
  );
};
export default Meteo