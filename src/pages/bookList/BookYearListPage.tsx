import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function isYearValid(year: string) {
  const availableYears = ["2021", "2022", "2023", "2024"]; // todo: replace with real data
  return availableYears.includes(year);
}

export function BookYearListPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get("year") || location.pathname.split("/")[2];
  const title = queryParams.get("title");
  const author = queryParams.get("author");
  const [img, setImg] = useState<string | null>(null); // State per l'URL dell'immagine

  const getImg = async () => {
    // TODO
  };

  useEffect(() => {
    if (title && author) {
      getImg();
    }
  }, [title, author, year]);

  if (year && !isYearValid(year as string)) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Se ci sono i dati del nuovo libro, mostra la card */}
      {year && title && author && (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
          {img && (
            <img
              src={img}
              alt="Immagine libro"
              className="w-full h-40 object-cover"
            />
          )}
          <div className="px-4 py-4">
            <p className="text-xl font-bold mb-2 text-black">
              Nuovo libro aggiunto per l'anno {year}:
            </p>
            <p className="text-lg mb-2 text-black">Titolo: {title}</p>
            <p className="text-lg mb-2 text-black">Autore: {author}</p>
            <p className="text-lg text-black">Anno: {year}</p>
          </div>
        </div>
      )}

      {/* Lista dei libri dell'anno */}
      <div className="max-w-lg mx-auto">
        <p className="text-xl font-bold mb-4">
          Elenco dei libri per l'anno {year}
        </p>
        <ul className="border border-gray-300 rounded-lg p-4">
          {/* Sostituisci questo elenco con i dati reali dei libri dell'anno */}
          <li className="text-lg mb-2">Titolo libro 1</li>
          <li className="text-lg mb-2">Titolo libro 2</li>
          <li className="text-lg mb-2">Titolo libro 3</li>
          {/* ... */}
        </ul>
      </div>
    </div>
  );
}

export default BookYearListPage;
