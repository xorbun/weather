
import { Col, Container, Row } from 'react-bootstrap';

import Home from './components/Home';
import Meteo from './components/Meteo';




function App() {
  return (
    <Container >
      <Row>
        <Col>
          <Meteo/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
