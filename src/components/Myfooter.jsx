import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Facebook } from "react-bootstrap-icons"
import { Instagram} from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';

const Footer = () => 
<Container fluid className='navcolor'>
<footer className="page-footer font-small text-black pt-4 footerover">
    <div className="container-fluid text-center text-md-left">
        <Row>
            <Col lg={2}>
                <h5 className="text-uppercase text-black-50"><Facebook/> <Instagram/> <Twitter/> <Youtube/> </h5>
                <p className="text-black-50">Audio and Subtitles</p>
                <p className="text-black-50">Media center</p>
                <p className="text-black-50">Privacy</p>
                <p className="text-black-50">Contact us</p>
            </Col>
            <Col lg={2}>
                <p className="text-black-50">Audio Description</p>
                <p className="text-black-50">Investor Relations</p>
                <p className="text-black-50">Legal Notices</p>
            </Col>
            <Col lg={2}>
                <p className="text-black-50">Help Center</p>
                <p className="text-black-50">Jobs</p>
                <p className="text-black-50">Coockie Preferences</p>
            </Col>
            <Col lg={2}>
                <p className="text-black-50">Gift Cards</p>
                <p className="text-black-50">Terms of use</p>
                <p className="text-black-50">Corporate Information</p>
            </Col>
        </Row>
        <div className="footer-copyright text-start py-3">
            <Button variant="outline-secondary">Service code</Button>
            <p className="text-black-50"> Weather app</p>
        </div>
    </div>
</footer>
</Container>
export default Footer