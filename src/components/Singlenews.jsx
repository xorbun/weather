import { Button, Card } from "react-bootstrap";

const SingleNews = (props) => {
  return (
    <Card className="cardbackground rounded-5" style={{ width: "58rem" }}>
      <div className="newsettingintocard">
        
        <div>
          <Card.Body>
            <div>
              <Card.Title>{props.news.title}</Card.Title>
              <Card.Text>{props.news.description}</Card.Text>
            </div>
            <div className="mt-5">
              <Button
                onClick={() => {
                  window.location.href = props.news.url;
                }}
              >
                Read more
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
export default SingleNews;
