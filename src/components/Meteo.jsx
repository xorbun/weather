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

<>

  <Container fluid style={{backgroundImage:"url('https://wallpaperaccess.com/full/398864.jpg')",backgroundSize:"cover"}}>
  <h1 className='text-center text-white'>Condizioni meteo attuali</h1>
  <Row className="d-flex justify-content-center mt-3 vh-100">
      <Col xs={2} >
      
        <Form onSubmit={(e)=>
        {
          e.preventDefault()
          dispatch(obtainmeteo(cityName))
        }}>
          <Form.Control className="mb-2 mt-3 "
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
          
         </Form>
      </Col>
    </Row>
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
      icon5={meteoFromRedux[5].weather[0].icon}
      windinfo={meteoFromRedux[0].wind.speed}
      windinfo2={meteoFromRedux[0].wind.gust}
      windinfo3={meteoFromRedux[0].wind.deg} />:
    ""}
  
    </Row> 
   }
  </Container>


  </>
  );
};
export default Meteo