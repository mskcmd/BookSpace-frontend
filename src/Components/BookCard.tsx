import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { TrashIcon } from "lucide-react";
import { Book } from "../utils/types";
import { useState } from "react";

interface BookCardProps {
  book: Book;
  onDelete: (id: number) => void;
}

export const BookCard = ({ book, onDelete }: BookCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-col gap-1 pb-2 ">
        <h3 className="text-xl font-semibold truncate">{book.title}</h3>
        <p className="text-sm text-gray-500 truncate">by {book.author}</p>
      </CardHeader>
      <CardBody className="pt-2">
        <p
          className={`text-gray-600 mb-4 ${
            showFullDescription ? "" : "line-clamp-2"
          }`}
        >
          {book.description}
        </p>
        {!showFullDescription && book.description.length > 100 && (
          <Button
            color="primary"
            // size="xs"
            onPress={toggleDescription}
            className="text-xs p-0 underline"
          >
            More...
          </Button>
        )}
        <div className="flex justify-end gap-2 mt-2">
          <Button
            color="danger"
            size="sm"
            onPress={() => onDelete(book._id)}
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
