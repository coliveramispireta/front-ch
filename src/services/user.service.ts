import { User } from '@/types/user.types';
import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getUserData = async (): Promise<User> => {
    try {
      const response = await axios.get<User>(`${apiURL}/user.json`);
      return response.data;
    } catch (error) {
      console.error('Error in getUserData:', error);
      throw new Error('Failed to obtain user data');
    }
  };