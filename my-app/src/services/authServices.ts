import axios from 'axios';
import { getToken } from './tokenServices';
import { User } from '@/components/Signup/SignUpTab';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
//signup
export const signUp = async (data: User) => {
  try{
    const response = await axios.post(`${baseUrl}/signup`, data);
    return response.data;
  }
  catch(error){
    console.log(error);
  }
  
};

//login
export interface LogIn {
  email: string;
  password: string;
}

export const logIn = async (data: LogIn): Promise<{ accessToken: string }> => {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response.data;
};

//get current user
export const getCurrentUser = async (): Promise<User> => {
  const response = await axios.get(`${baseUrl}/getLoggedInUser`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  console.log(response.data);
  return response.data;
};
