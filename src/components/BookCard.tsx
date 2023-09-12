import Card from "react-bootstrap/Card";

const BookCard = ({ title, categories, image, authors }) => {
  return (
    <Card style={{ width: "15rem" }} className="h-100 p-3 bg-light">
      <div className="d-flex justify-content-center align-items-center">
        <Card.Img variant="top" src={image} style={{ width: "10rem" }} />
      </div>
      <Card.Body>
        <Card.Text className="text-dark">{categories}</Card.Text>
        <Card.Title className="fs-6">{title}</Card.Title>
        <Card.Text className="text-dark">{authors}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
