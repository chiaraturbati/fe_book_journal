import React from "react";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500">Errore 404</h1>
        <p className="mt-4 text-xl text-gray-800 mb-10">
          Oops! La pagina che stai cercando non esiste.
        </p>

        <Link
          to="/home"
          className="mt-8 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
