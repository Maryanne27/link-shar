// Save the imports at the top of the file
import axios from 'axios';

// Define the saveUserInfo function
export const saveUserInfo = async (userId: string, userInfo: UserInfo) => {
    // Get the API URL based on environment
    const apiUrl =
        import.meta.env.VITE_ENVIRONMENT === 'development'
        ? import.meta.env.VITE_DEV_API_URL
        : import.meta.env.VITE_API_URL;

    // Check if userId and userInfo are provided
    if (!userId || !userInfo) {
        return null;
    }

    try {
        // Make the PATCH request to the API
        const response = await axios.patch(`${apiUrl}user-info`, {
            userId,
            userInfo
        });

        return response;
    } catch (error) {
        // Handle errors here
        console.error('Error saving user info:', error);
        throw error; // or return a specific error object
    }
};
