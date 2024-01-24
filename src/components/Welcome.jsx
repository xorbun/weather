import { Container,Row,Col } from "react-bootstrap";


const Welcome=()=>
{
    return(
        <Container fluid style={{backgroundImage:"url('https://wallpaperaccess.com/full/4153450.jpg')",backgroundSize:"cover"}}>
            <Row>
                <Col>
                    <h1 className="vh-100 text-center text-body-emphasis">welcome, clicca su cerca per iniziare</h1>
                </Col>
            </Row>
        </Container>
        
    )
}
export default Welcome;