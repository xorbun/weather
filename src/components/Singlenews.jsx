import { Card } from "react-bootstrap";

const SingleNews = (props) => {
  return (
    <Card className="cardbackground rounded-5" style={{ width: "58rem" }}>
      <div className="newsettingintocard">
        <div>
          <Card.Img
            variant="top"
            src={props.news.urlToImage}
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title className=" ">{props.news.title}</Card.Title>
            <Card.Text className="">{props.news.description}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
export default SingleNews;
