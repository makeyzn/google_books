import "bootstrap/dist/css/bootstrap.css";
import SearchForm from "./SearchForm";
import booksShelf from "../assets/booksShelf.jpg";

const Header = () => {
  return (
    <header className="container-fluid bg-dark">
      <SearchForm />
    </header>
  );
};

export default Header;
