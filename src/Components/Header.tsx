import { Button } from "@nextui-org/react";
import { PlusCircleIcon } from "lucide-react";

interface HeaderProps {
  onAddBook: () => void;
}

export const Header = ({ onAddBook }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 mb-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">BookSpace</h1>
        <Button
          color="primary"
          onPress={onAddBook}
          className="flex items-center gap-2"
        >
          <PlusCircleIcon className="h-5 w-5" />
          Add Book
        </Button>
      </div>
    </header>
  );
};
