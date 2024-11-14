import { AxiosError } from "axios";
import toast from "react-hot-toast";


type ErrorResponse = {
    message: string,
    success: Boolean
}

const errorHandler = async (error: Error | AxiosError) => {
    const axiosError = error as AxiosError;
    if (axiosError.response?.data) {
        const errorResponse = axiosError.response.data as ErrorResponse
        console.log("errorResponse", errorResponse);
        if (errorResponse.message == "A book with this title already exists") {
            toast.error(errorResponse.message);
        }
        // if (errorResponse.message == "Books are not available") {
        //     toast.error(errorResponse.message);
        // }
    } else {
        toast.error('Something went wrong. Please try again!');
    }

}

export default errorHandler

