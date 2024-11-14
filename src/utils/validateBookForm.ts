import { BookFormData, BookFormErrors } from "./types";

export const validateBookForm = (formData: BookFormData): { isValid: boolean; newErrors: BookFormErrors } => {
  let isValid = true;
  const newErrors: BookFormErrors = {};

  if (!formData.title) {
    newErrors.title = "Title is required";
    isValid = false;
  }
  if (!formData.author) {
    newErrors.author = "Author is required";
    isValid = false;
  }
  if (!formData.description) {
    newErrors.description = "Description is required";
    isValid = false;
  }

  return { isValid, newErrors };
};