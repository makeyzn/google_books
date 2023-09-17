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
    <div className="row d-flex justify-content-center mt-4">
      <img
        src={image}
        alt=""
        className="col-3 mx-5 mt-5"
        style={{ height: "30%", width: "30%" }}
      />
      <div className="col-7 mt-5">
        <h6>{categories}</h6>
        <h2>{title}</h2>
        <h6 className="text-secondary">
          <u>{authors}</u>
        </h6>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="h6 mt-5"
          style={{ lineHeight: "1.6rem" }}
        />
      </div>
    </div>
  );
};

export default BookPage;
