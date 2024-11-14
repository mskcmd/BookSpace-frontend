import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea
} from "@nextui-org/react";
import { useState } from "react";
import { BookFormData, BookFormErrors } from "../utils/types";
import { validateBookForm } from "../utils/validateBookForm";

interface BookFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: BookFormData) => void;
}

export const BookForm = ({ isOpen, onClose, onSave }: BookFormProps) => {
  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    author: "",
    description: ""
  });
  const [errors, setErrors] = useState<BookFormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof BookFormData
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" }); // Reset error for the field
  };

  const handleSubmit = () => {
    const { isValid, newErrors } = validateBookForm(formData);
    setErrors(newErrors);

    if (isValid) {
      onSave(formData);
      setFormData({ title: "", author: "", description: "" }); // Reset form fields
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      size="lg"
      classNames={{
        backdrop: "bg-gray-900/50 backdrop-blur-sm",
        base: "border-gray-200",
        header: "border-b border-gray-200",
        footer: "border-t border-gray-200",
        closeButton: "hover:bg-gray-100 active:bg-gray-200 rounded-full"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h2 className="text-xl font-bold">Add New Book</h2>
            </ModalHeader>
            <ModalBody className="gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  placeholder="Enter book title"
                  variant="bordered"
                  isInvalid={!!errors.title}
                  errorMessage={errors.title}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Author</label>
                <Input
                  value={formData.author}
                  onChange={(e) => handleInputChange(e, "author")}
                  placeholder="Enter author name"
                  variant="bordered"
                  isInvalid={!!errors.author}
                  errorMessage={errors.author}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, "description")}
                  placeholder="Enter book description"
                  variant="bordered"
                  minRows={3}
                  isInvalid={!!errors.description}
                  errorMessage={errors.description}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={handleSubmit}>
                Add Book
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};