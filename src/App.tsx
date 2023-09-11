import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AsyncBookList from "./features/AsyncBookList";

function App() {
  return (
    <>
      <Header />
      <AsyncBookList />
    </>
  );
}

export default App;
