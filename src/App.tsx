// App.tsx

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AddBookPage,
  BookYearListPage,
  ErrorPage,
  HomePage,
  LoginPage,
} from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book-year-list" element={<BookYearListPage />}>
            <Route path=":year" element={<div>BookYearListPage</div>} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
