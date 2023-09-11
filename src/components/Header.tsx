import "bootstrap/dist/css/bootstrap.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="container-fluid bg-primary ">
      <SearchForm />
    </header>
  );
};

export default Header;
