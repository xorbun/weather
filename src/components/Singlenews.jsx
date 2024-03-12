import { Button, Card } from "react-bootstrap";

const SingleNews = (props) => {
  return (
    <Card className="cardbackground rounded-5" style={{ width: "58rem" }}>
      <div className="newsettingintocard">
        <div>
          <Card.Img src={props.news.urlToImage} style={{ width: "200px" }} />
        </div>
      <div>
          <Card.Body>
            <div>
              <Card.Title>{props.news.title}</Card.Title>
              <Card.Text className="truncate">
                {props.news.description}
              </Card.Text>
            </div>
            <div className="mt-5">
              <Button>Read more</Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
export default SingleNews;
