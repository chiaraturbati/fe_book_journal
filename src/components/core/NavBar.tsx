import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const isActive = (obj) =>
  obj.isActive ? "text-lg text-sky-400 font-semibold" : "text-lg text-white";

export function NavBar() {
  const [selectedYear, setSelectedYear] = useState("Book Year List");
  const navigate = useNavigate();

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 shadow z-10">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/*Logo*/}
          <div className="flex items-center">
            {/* TODO: <img src={logo} alt="my logo" className="w-16" /> */}
            <NavLink to="home" className="text-lg text-white font-semibold">
              Home
            </NavLink>
            <NavLink
              to="/add-book"
              className="btn btn-accent hover:bg-opacity-25"
            >
              Add Book
            </NavLink>
            {/* Dropdown */}
            <div className="relative">
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="btn btn-accent dropdown-toggle"
                  onClick={() => {
                    // Toggla l'apertura/chiusura del menu a tendina
                    const dropdownMenu =
                      document.getElementById("dropdown-menu");
                    dropdownMenu!.classList.toggle("hidden");
                  }}
                >
                  Book Year List
                  <svg
                    className="w-5 h-5 inline-block ml-1 -mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown-menu"
                  className="hidden absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg"
                >
                  <NavLink
                    to={`/book-year-list/2022`}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleYearChange("2022")}
                  >
                    2022
                  </NavLink>
                  <NavLink
                    to="/book-year-list/2023"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleYearChange("2023")}
                  >
                    2023
                  </NavLink>
                  <NavLink
                    to="/book-year-list/2021"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleYearChange("2021")}
                  >
                    2021
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/*actions button*/}
          <div className="flex gap-4">
            <NavLink to="/login" className="btn btn-accent hover:bg-opacity-25">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
