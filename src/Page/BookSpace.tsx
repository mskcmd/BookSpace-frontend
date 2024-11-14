import { useEffect, useState } from "react";
import { Book, BookFormData } from "../utils/types";
import { Header } from "../Components/Header";
import { BookCard } from "../Components/BookCard";
import { BookForm } from "../Components/BookForm";
import errorHandler from "../utils/errorHnadle";
import Api from "../utils/axios";
import toast from "react-hot-toast";

export const BookCatalog = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
      const result = await Api.get("/books");
      setBooks(result.data.data);
    } catch (error) {
      errorHandler(error as Error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async (formData: BookFormData) => {
    try {
      await Api.post("/books", formData);
      fetchData();
      handleCloseModal();
    } catch (error) {
      errorHandler(error as Error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await Api.delete(`/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      toast.success("Successfully deleted");
    } catch (error) {
      errorHandler(error as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [books]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddBook={() => handleOpenModal()} />

      <main className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard key={book._id} book={book} onDelete={handleDelete} />
            ))
          ) : (
            <div className="text-center col-span-3 text-gray-500">
              No books available
            </div>
          )}
        </div>
      </main>

      <BookForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
      />
    </div>
  );
};
