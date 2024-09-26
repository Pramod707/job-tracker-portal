import { create } from 'zustand';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie'

const API_URL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    signup: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/signup`, { email, password });
            console.log(response)
            set({ isLoading: false });
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            throw error;
        }
    },
    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/login`, { email, password });
            console.log(response.data.data.user);

            set({
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.response?.data?.data.message || "Error logging in", isLoading: false });
            throw error;
        }
    },
    addDetails: async (formData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/login`,
                { ...formData }
            );
            console.log(response)
            set({
                user: response.data.data.user,
                isAuthenticated: true,
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.response?.data?.data.message || "Error logging in", isLoading: false });
            throw error;
        }
    },
    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await axios.post(`${API_URL}/api/logout`);
            set({ user: null, isAuthenticated: false, error: null, isLoading: false });
        } catch (error) {
            set({ error: "Error logging out", isLoading: false });
            throw error;
        }
    },
    verifyOTP: async (otp) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/otp`, { otp });
            console.log(response)
            set({ user: response.data.data.user, isAuthenticated: true, isLoading: false });
            return response.data;
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },
    verifyToken: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/verify`);
            console.log(response)
            if (response.data.data.success) {
                set({ user: response.data.data.user, isAuthenticated: true, isCheckingAuth: false });
                <Navigate to='/' replace />
            } else {
                set({ user: undefined, isAuthenticated: false, isCheckingAuth: false });
                <Navigate to='/login' replace />
            }
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false });
        }
    },
    forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
            console.log(response)
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response.data.message || "Error sending reset password email",
            });
            throw error;
        }
    },
    resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/api/auth/reset-password/${token}`, { password });
            console.log(response)
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response.data.message || "Error resetting password",
            });
            throw error;
        }
    },
}));
