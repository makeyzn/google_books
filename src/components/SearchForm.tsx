import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../redux-hooks";
import { fetchAllBooks } from "../features/booksAsyncActions";
import { useNavigate } from "react-router-dom";

export interface DataSearch {
  search: string;
  sorting: string;
  category: string;
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    dispatch(fetchAllBooks(data));
    navigate("/");
  };
  return (
    <>
      <Form
        className="container-sm text-center d-flex flex-column align-items-center pb-4"
        style={{ maxWidth: 580 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4">Search for books</h1>
        <Form.Group className="mb-4 col-md-8 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search"
            className="mx-3"
            {...register("search")}
          />
          <Button type="submit" className="btn-light">Submit</Button>
        </Form.Group>
        <div className="row">
          <Form.Group className="row col align-items-center">
            <Form.Label className="col">Categories</Form.Label>
            <Form.Select className="col" {...register("category")}>
              <option value="">all</option>
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
            <Form.Select className="col" {...register("sorting")}>
              <option value="newest">newest</option>
              <option value="relevance">relevance</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
