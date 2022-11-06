import axios from "axios";

export const createCategory = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(' http://localhost:5002/api/category', formData, config);

    return response;
};

export const getCategories = async () => {
    const response = await axios.get(' http://localhost:5002/api/category');

    return response;
};