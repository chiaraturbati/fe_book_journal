import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export interface BookData {
  title: string;
  author: string;
  year: string;
}

export function AddBookPage() {
  const [bookData, setBookData] = useState<BookData>({
    title: "",
    author: "",
    year: "",
  });

  const navigate = useNavigate();
  const [addedBook, setAddedBook] = useState<BookData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Validazione per year: assicurati che sia un numero
    if (name === "year" && isNaN(Number(value))) {
      return;
    }
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddedBook(bookData);
    navigate(
      `/book-year-list?title=${encodeURIComponent(
        bookData.title
      )}&author=${encodeURIComponent(
        bookData.author
      )}&year=${encodeURIComponent(bookData.year)}`
    );
  };

  const yearsOptions = ["2022", "2023", "2024"]; // Opzioni degli anni disponibili

  return (
    <div className="w-96 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Aggiungi un libro</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {" "}
        {/* Spaziatura ridotta tra i campi del form */}
        <div className="space-y-1">
          <label htmlFor="title">Titolo:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
            className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="author">Autore:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
            className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="year">Anno:</label>
          <div className="relative">
            <select
              id="year"
              name="year"
              value={bookData.year}
              onChange={handleChange}
              required
              className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer appearance-none"
            >
              <option value="" disabled>
                Seleziona un anno
              </option>
              {yearsOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <span
              className="absolute left-0 bottom-0 flex items-center pl-2 pointer-events-none text-gray-500"
              style={{
                visibility: bookData.year ? "visible" : "hidden",
                transform: bookData.year
                  ? "translateY(-50%)"
                  : "translateY(-50%)",
              }}
            >
              {bookData.year || "Seleziona un anno"}
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          {" "}
          {/* Aggiunto margine inferiore al pulsante */}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 cursor-pointer"
          >
            Aggiungi
          </button>
        </div>
      </form>
    </div>
  );
}
