import { create } from 'zustand';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,
    data: null,

    signup: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${API_URL}/api/signup`, { email, password });
            set({ isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${API_URL}/api/login`, { email, password });
            set({
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    addDetails: async (formData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/login`,
                { ...formData }
            );
            set({
                user: response.data.data.user,
                isAuthenticated: true,
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await axios.post(`${API_URL}/api/logout`);
            set({ user: null, isAuthenticated: false, error: null, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    verifyOTP: async (otp) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/otp`, { otp });
            set({ user: response.data.data.user, isAuthenticated: true, isLoading: false });
            return response.data;
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    verifyToken: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/verify`);
            if (response.data.data.success) {
                set({ user: response.data.data.user, isAuthenticated: true, isCheckingAuth: false });
                <Navigate to='/' replace />
            } else {
                set({ user: undefined, isAuthenticated: false, isCheckingAuth: false });
                <Navigate to='/login' replace />
            }
        } catch (error) {
            set({ error: error.response.data.err.message, isCheckingAuth: false, isAuthenticated: false });
        }
    },
    forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
            set({ message: response?.data?.data?.message, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/auth/reset-password/${token}`, { password });
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    addJob: async (formData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/create-job`, formData);
            set({ message: response.data.data.message, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    },
    getJobs: async (criteria) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/get-jobs`, criteria);
            set({ data: response.data.data, message: response.data.data.message, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.err.message, isLoading: false });
            await new Promise(resolve => setTimeout(resolve, 0));
            throw error;
        }
    }
}));
