import { CardProperties } from "./BookCard";

interface PageProperties extends CardProperties {
  description: string;
}

const BookPage = ({
  title,
  categories,
  image,
  authors,
  description,
}: PageProperties) => {
  return (
    <div className="row">
      <img src={image} alt="" className="col-6" />
      <div className="col-4">
        <h6>{categories}</h6>
        <h5>{title}</h5>
        <h6>{authors}</h6>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default BookPage;
