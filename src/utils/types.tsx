export interface Book {
    _id: number;
    title: string;
    author: string;
    description: string;
  }
  
  export interface BookFormData {
    title: string;
    author: string;
    description: string;
  }

  export interface BookFormErrors {
    title?: string;
    author?: string;
    description?: string;
  }