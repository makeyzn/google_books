import Card from "react-bootstrap/Card";

const BookCard = ({ title, categories, image, authors }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text className="text-secondary">{categories}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-secondary">{authors}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
