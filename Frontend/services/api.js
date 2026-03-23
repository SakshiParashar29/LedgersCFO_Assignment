import axios from 'axios';

const API = axios.create({baseURL: 'https://ledgerscfo-assignment.onrender.com'});

export const getClients = () => API.get('/api/clients');

export const getTasks = (clientId) => API.get(`/api/tasks/${clientId}`);

export const createTask = (task) => API.post(`/api/tasks`, task);

export const updateTask = (id, updatedTask) => API.patch(`/api/tasks/${id}`, updatedTask);