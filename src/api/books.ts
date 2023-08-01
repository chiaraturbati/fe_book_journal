import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/"; // Cambia questo URL se il tuo server API ha un diverso percorso per le chiamate

export const getBooks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch books.");
  }
};

export const getBook = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch book.");
  }
};

export const addBook = async (newBook: any) => {
  try {
    const response = await axios.post(BASE_URL, newBook);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add book.");
  }
};

export const updateBook = async (id: string, updatedBook: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update book.");
  }
};

export const deleteBook = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete book.");
  }
};
