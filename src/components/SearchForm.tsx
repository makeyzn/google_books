import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const SearchForm = () => {
  return (
    <>
      <Form
        className="container-sm text-center d-flex flex-column align-items-center"
        style={{ maxWidth: 580 }}
      >
        <h1 className="mb-4">Search for books</h1>
        <Form.Group className="mb-4 col-md-8" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
        <div className="row">
          <Form.Group className="row col align-items-center">
            <Form.Label className="col">Categories</Form.Label>
            <Form.Select className="col">
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="row col align-items-center">
            <Form.Label className="col">Sorting by</Form.Label>
            <Form.Select className="col">
              <option value="relevance ">relevance</option>
              <option value="newest">newest</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
