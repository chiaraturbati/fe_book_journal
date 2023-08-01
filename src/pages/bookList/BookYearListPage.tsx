import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getBook, getBooks } from "../../api/books";

const BASE_URL = "/api/"; // Replace this with the actual base URL for your backend API

export function BookYearListPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get("year") || location.pathname.split("/")[2];
  const title = queryParams.get("title");
  const author = queryParams.get("author");
  const [img, setImg] = useState<string | null>(null); // State for the URL of the book image
  const [books, setBooks] = useState<any[]>([]); // State for the list of books

  const getImg = async () => {
    // TODO: Implement logic to fetch book image based on title and author
  };

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  useEffect(() => {
    if (title && author) {
      getImg();
    }
    fetchBooks();
  }, [title, author, year]);

  // if (year && !isYearValid(year as string)) {
  //   return <Navigate to="/error" />;
  // }

  return (
    <div className="container mx-auto p-4">
      {/* If there are data for the new book, show the card */}
      {year && title && author && (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
          {img && (
            <img
              src={img}
              alt="Book Cover"
              className="w-full h-40 object-cover"
            />
          )}
          <div className="px-4 py-4">
            <p className="text-xl font-bold mb-2 text-black">
              New book added for the year {year}:
            </p>
            <p className="text-lg mb-2 text-black">Title: {title}</p>
            <p className="text-lg mb-2 text-black">Author: {author}</p>
            <p className="text-lg text-black">Year: {year}</p>
          </div>
        </div>
      )}

      {/* List of books for the year */}
      <div className="max-w-lg mx-auto">
        <p className="text-xl font-bold mb-4">
          List of books for the year {year}
        </p>
        <ul className="border border-gray-300 rounded-lg p-4">
          {/* Replace this list with the real data of books for the year */}
          {books
            .filter((book) => book.year === Number(year))
            .map((book) => (
              <li key={book._id} className="text-lg mb-2">
                {book.title} , {book.author}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BookYearListPage;
