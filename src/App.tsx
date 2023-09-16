import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AsyncBookList from "./features/AsyncBookList";
import { Route, Routes } from "react-router-dom";
import AsyncBookPage from "./features/AsyncBookPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<AsyncBookList />} />
        <Route path="/bookPage" element={<AsyncBookPage />} />
      </Routes>
    </>
  );
}

export default App;
