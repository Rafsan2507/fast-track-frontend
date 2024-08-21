import axios from 'axios';
import { getToken } from './tokenServices';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export interface ProposeSlots {
  timezone: string;
  startTime: string[];
}

export const proposeSlot = async (data: ProposeSlots) => {
  try {
    const response = await axios.post(
      `${baseUrl}/dashboard/interviewdashboard/addSession`,
      data,
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

export const getProposedSessions = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/dashboard/interviewdashboard/sessionlist`,
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


export const getUsersWithSessions = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/dashboard/interviewdashboard/allusersessions`,
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