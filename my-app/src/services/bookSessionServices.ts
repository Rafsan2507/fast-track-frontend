import axios from 'axios';
import { getToken } from './tokenServices';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export const getProfileWithSessions = async (id:number) => {
    try {
      const response = await axios.get(
        `${baseUrl}/dashboard/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
};