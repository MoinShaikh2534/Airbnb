import axios from 'axios';
// Corrected base URL (removed extra dot)
const API = axios.create({ baseURL: 'http://localhost:8080/api/' });

// User Authentication
export const UserSignUp = async (data) => await API.post('/user/signup', data);
export const UserSignIn = async (data) => await API.post('/user/signin', data);

// Property APIs
export const getAllProperty = async (filter) => await API.get(`/property?search=${filter}`);
export const getPropertyDetails = async (id) => await API.get(`/property/${id}`);
export const bookProperty = async (id, bookingDate) => await API.post(`/property/${id}/book`, { bookingDate });
export const getMyProperties = async () => await API.get('/property/my');
export const addProperty = async (data) => await API.post('/property', data);
export const deleteProperty = async (id) => await API.delete(`/property/${id}`);
export const updateProperty = async (id, data) => await API.patch(`/property/${id}`, data);

// Favorites APIs
export const addToFavorites = async (id) => await API.post('/user/addtofavorites', { propertyId: id });
export const getFavorites = async () => await API.get('/user/getuserfavorites');
export const removeFromFavorites = async (id) => await API.post('/user/removefromfavorites', { propertyId: id });

// Booking APIs
export const getBookings = async () => await API.get('/booking');
export const getUserBookings = async () => await API.get('/booking');
export const cancelBooking = async (id) => await API.delete(`/booking/${id}`);

// User APIs
export const logout = async () => await API.post('/user/logout');
export const getUser = async () => await API.get('/user');
export const updateUser = async (data) => await API.patch('/user', data);
export const updatePassword = async (data) => await API.patch('/user/password', data);
export const deleteUser = async () => await API.delete('/user');

// Add error handling to API requests
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default API;
