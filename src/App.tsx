import { Toaster } from "react-hot-toast";
import { BookCatalog } from "./Page/BookSpace";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BookCatalog />
    </div>
  );
}

export default App;
