import Card from "react-bootstrap/Card";

const BookCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text className="text-secondary">Categories</Card.Text>
        <Card.Title>Book Title</Card.Title>
        <Card.Text className="text-secondary">The author of the book</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
