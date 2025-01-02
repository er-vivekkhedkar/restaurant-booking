import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface BookingData {
  date: Date;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
}

export const bookingService = {
  createBooking: async (bookingData: BookingData) => {
    console.log('Creating booking:', bookingData);
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  },

  getBookings: async (date: Date) => {
    console.log('Fetching bookings for date:', date);
    const response = await axios.get(`${API_URL}/bookings`, {
      params: { date: date.toISOString() }
    });
    return response.data;
  },

  deleteBooking: async (id: string) => {
    console.log('Deleting booking:', id);
    const response = await axios.delete(`${API_URL}/bookings/${id}`);
    return response.data;
  }
};