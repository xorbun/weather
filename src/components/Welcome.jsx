import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleNews from "./Singlenews";


const Welcome = () => {
  const news = useSelector((state) => {
    return state.news.content[0];
  });
 
  if (news) {
    const numberOfArticles = "10";
    const newsToWatch = news.articles.slice(0, numberOfArticles);
    return (
      <div className="colorsite">
        <Container fluid className=" vh-200">
          <h1>Today's news</h1>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center mb-4">
              <Card className="cardbackground rounded-5">
                <Card.Img variant="top" src={news.articles[11].urlToImage} />
                <Card.Body>
                  <Card.Title>{news.articles[11].title}</Card.Title>
                  <Card.Text>{news.articles[11].description}</Card.Text>
                  <Button onClick={() => { window.location.href = news.articles[11].url }}>Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            {newsToWatch.map((info) => {
              return (
                <Col
                  lg={6}
                  className="d-flex justify-content-center mb-4"
                  key={info.url}
                >
                  <SingleNews news={info} />
                </Col>
              );
            })}
          </Row>
          
        </Container>
      </div>
    );
  }
};
export default Welcome;
